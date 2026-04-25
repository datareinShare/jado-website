const fs = require("fs");
const path = require("path");

const ENV_PATH = path.join(__dirname, "..", ".env");
if (fs.existsSync(ENV_PATH)) {
  fs.readFileSync(ENV_PATH, "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .forEach((l) => {
      const idx = l.indexOf("=");
      const k = l.slice(0, idx).trim();
      const v = l.slice(idx + 1).trim().replace(/^['"]|['"]$/g, "");
      if (!process.env[k]) process.env[k] = v;
    });
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY not set");
  process.exit(1);
}

const OUT = path.join(__dirname, "..", "public", "images", "bg");
fs.mkdirSync(OUT, { recursive: true });

const STYLE = [
  "Editorial photography style background image, no people, no text, no logos, no UI elements, no watermark.",
  "Clear defined composition with recognizable subject, sharp focus on main element, controlled depth of field.",
  "Cinematic lighting with strong contrast, rich color depth, designed for use as a 25-40% opacity background overlay.",
  "Color palette: warm earth tones (deep brown #4a3c2c, warm beige #b09880, cream #f5efe7) with sage green accent (#5a9a5a).",
  "High-end magazine quality, refined and confident.",
].join(" ");

const SECTIONS = [
  {
    name: "bg-mission",
    prompt: `${STYLE} A wide cinematic landscape: golden sunrise over distant rolling hills, layered atmospheric haze, warm light beams cutting through morning mist. Sharp horizon line, defined cloud shapes glowing amber. Sense of vast possibility and new beginnings. Photographic, not painterly.`,
  },
  {
    name: "bg-about-background",
    prompt: `${STYLE} A serene mountain ridge silhouette layered in fading depth, soft morning fog between the layers. Each ridge clearly defined with crisp edges, fading from dark sage in foreground to pale beige in distance. Quiet, contemplative, with sense of journey. Photographic clarity.`,
  },
  {
    name: "bg-founder-message",
    prompt: `${STYLE} Warm sunset light filtering through tall trees from behind — strong directional golden light rays cutting through, dark tree silhouettes in foreground forming a defined frame, glowing bokeh of warm amber and gold dots in the background. Deep brown shadow areas dominate, highlights are bright and sharp. Designed for screen blend mode on a dark brown section, so dark base with crisp luminous highlights.`,
  },
  {
    name: "bg-altif-intro",
    prompt: `${STYLE} Lush green forest canopy viewed from below, sunlight streaming down through defined leaf patterns, sharp light-and-shadow contrast on the ground. Vibrant sage and warm green with cream sunbeams. Clear defined leaf shapes, not blurred. Sense of safety and growth. Photographic, sharp focus.`,
  },
  {
    name: "bg-altif-daily",
    prompt: `${STYLE} Top-down view of a child's craft desk: scattered colorful paper, wooden building blocks, paintbrushes, open sketchbook with abstract drawings. Warm cream paper background, defined object outlines, bright natural lighting. No text or readable letters. Playful but elegant composition. Photographic.`,
  },
  {
    name: "bg-altif-strengths",
    prompt: `${STYLE} Macro photograph of a single faceted crystal or geode catching light, refracting golden and sage green prismatic rays against a deep near-black background. Crystal edges sharply defined, light patterns crisp and geometric. Suggests hidden brilliance emerging from darkness. Designed for screen blend on dark brown section: dark base with crisp luminous crystalline highlights only.`,
  },
  {
    name: "bg-altif-pillars",
    prompt: `${STYLE} Three tall classical stone columns photographed from below against a soft cream sky, warm side-lighting casting subtle shadows, crisp architectural detail visible on the column shafts. Composition shows the columns clearly and symmetrically. Elegant, structured, timeless. Photographic clarity.`,
  },
  {
    name: "bg-mirai-overview",
    prompt: `${STYLE} A child's wooden study desk top-down view: open notebook with abstract pencil sketches (no readable text), wooden pencils, a vintage globe, and a small potted plant. Soft warm window light from the side. Defined object shapes, photographic clarity. No text, no letters, no logos. Educational and warm atmosphere.`,
  },
  {
    name: "bg-mirai-skills",
    prompt: `${STYLE} A composition of four symbolic objects representing learning skills, photographed flat-lay on a cream linen surface: a sage green leaf, a small brass compass, a glass marble catching light, and a simple wooden block. Each object clearly defined, soft directional lighting, minimalist editorial still life. No text.`,
  },
  {
    name: "bg-mirai-courses",
    prompt: `${STYLE} A dark night sky photograph filled with bright clear constellations and warm amber starlight, with one prominent glowing nebula in sage green and gold tones. Stars sharply defined as bright points. Designed for screen blend on dark brown section: very dark base with crisp luminous starpoints and one warm nebula glow.`,
  },
  {
    name: "bg-mirai-reasons",
    prompt: `${STYLE} Open vintage hardcover book on a warm wooden surface, photographed from a slight angle, soft side lighting, pages slightly curved, with a delicate sage green plant sprig laid across the pages. Pages appear blank or with abstract pencil marks (no readable text). Defined contours, warm cream and brown tones. Editorial, contemplative.`,
  },
];

// gpt-image-2 requires org verification; gpt-image-1 works without it.
// Set PREFER_V2=1 to try v2 first.
const MODELS = process.env.PREFER_V2 === "1"
  ? ["gpt-image-2", "gpt-image-1"]
  : ["gpt-image-1"];
const SIZE = "1536x1024";
const QUALITY = "medium";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function callApi(model, prompt) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
      n: 1,
      size: SIZE,
      quality: QUALITY,
      output_format: "jpeg",
      background: "opaque",
    }),
  });
  return res;
}

async function generate(section) {
  const outPath = path.join(OUT, `${section.name}.jpg`);
  for (const model of MODELS) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        process.stdout.write(`  [${section.name}] ${model} attempt ${attempt + 1}... `);
        const res = await callApi(model, section.prompt);
        if (!res.ok) {
          const err = await res.text();
          const errSnip = err.substring(0, 200);
          console.log(`FAIL ${res.status}`);
          console.log(`    ${errSnip}`);
          if (
            res.status === 404 ||
            res.status === 403 ||
            /model.*not.*(found|available|exist)|must be verified/i.test(err)
          ) {
            break; // try next model
          }
          if (res.status === 429 || res.status >= 500) {
            await sleep(5000);
            continue;
          }
          return false;
        }
        const json = await res.json();
        const b64 = json.data[0].b64_json;
        fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
        console.log(`OK -> ${section.name}.jpg`);
        return true;
      } catch (e) {
        console.log(`ERR ${e.message}`);
        await sleep(3000);
      }
    }
  }
  return false;
}

async function main() {
  console.log("=== JADO background image generator ===");
  console.log(`Output: ${OUT}`);
  console.log(`Models tried: ${MODELS.join(" -> ")}`);
  console.log(`Size: ${SIZE}, Quality: ${QUALITY}\n`);

  const filter = process.argv[2];
  const targets = filter
    ? SECTIONS.filter((s) => s.name.includes(filter))
    : SECTIONS;

  let ok = 0;
  let ng = 0;
  for (const s of targets) {
    const result = await generate(s);
    if (result) ok++; else ng++;
    await sleep(2000);
  }
  console.log(`\nDone. OK: ${ok}, FAIL: ${ng}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
