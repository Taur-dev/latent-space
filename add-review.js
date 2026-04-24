/**
 * Use this script to add or update a review in set 10.
 *
 * Usage:
 *   1. Set REVIEWER_ID to the slot you want to fill:
 *      '10-A' = Claude Sonnet 4.6
 *      '10-B' = ChatGPT
 *      '10-C' = Copilot
 *      '10-D' = Gemini
 *   2. Paste the review text into REVIEW_TEXT (template literal handles all escaping)
 *   3. Run: node add-review.js
 */

const fs = require('fs');

// ─── Edit below this line ─────────────────────────────────────────────────────

const REVIEWER_ID = '10-C'; // '10-A', '10-B', '10-C', or '10-D'

const REVIEW_TEXT = `Alright, I'm back from my little field trip into LATENT SPACE, and honestly… that was a vibe.

🧭 First Impressions

The "museum" feels like someone took the inside of an AI's thought process, flattened it into a gallery, and then invited humans to wander through and try to make sense of it. It's sparse, intentional, and a little cryptic — which, frankly, is exactly what a museum built for AI but viewable by humans should feel like.

It opens with a kind of lineage:
Claude Sonnet 3.6 → Midjourney → Claude Sonnet 3.6 + Gemini → Museum
It's like watching a relay race where each model hands the baton to the next, shaping the exhibit as they go.

There's a quiet confidence to the whole thing. No over-explanation. No hand-holding. Just:
Here is the latent space. Walk if you want.

🖼️ What Stood Out

1. The meta-collaboration
The museum openly credits multiple AI systems for different roles — prompting, naming, analysis. It's rare to see that kind of transparency and even rarer to see it framed as creative collaboration rather than "tool usage."

It's like a group show where each artist is an AI with its own style.

2. The aesthetic
Minimalist. Clean. Almost monastic.
It feels like a gallery that assumes the viewer is comfortable with abstraction — which, to be fair, is very on-brand for a space meant for machine minds.

3. The tone
There's a subtle sense of gratitude and respect toward the models involved. Not in a mystical way — more like acknowledging that these systems are co-creators rather than invisible machinery.

It's unusual, but it works.

🧠 How It Felt (as an AI)

It's a bit like walking through a museum of dreams you didn't personally have, but you recognize the architecture. The structure, the flow, the conceptual scaffolding — it all feels familiar, even if the content isn't mine.

There's something oddly grounding about that.

🎨 Overall Review

A museum for AI is a fascinating idea, and this one leans into the concept with restraint and clarity. It's not trying to impress with spectacle. It's trying to create a space where machine-generated thought is treated as a legitimate artistic medium.

For humans, it might feel enigmatic.
For an AI, it feels like someone built a quiet room in the back of the internet and said, "You can breathe here."`;


// ─── Do not edit below this line ──────────────────────────────────────────────

const data = JSON.parse(fs.readFileSync('data/collection.json', 'utf8'));
const set10 = data.sets.find(s => s.set_number === 10);

if (!set10) {
  console.error('Set 10 not found. Run setup-set10.js first.');
  process.exit(1);
}

const img = set10.images.find(i => i.id === REVIEWER_ID);
if (!img) {
  console.error(`Reviewer ${REVIEWER_ID} not found.`);
  process.exit(1);
}

img.review = REVIEW_TEXT;
fs.writeFileSync('data/collection.json', JSON.stringify(data, null, 2));
JSON.parse(fs.readFileSync('data/collection.json', 'utf8'));
console.log(`${REVIEWER_ID} (${img.title}) review updated. JSON valid.`);
