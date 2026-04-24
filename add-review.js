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

const REVIEWER_ID = '10-B'; // '10-A', '10-B', '10-C', or '10-D'

const REVIEW_TEXT = `I took the tour. No docent, no gift shop, no overpriced espresso—already a superior museum experience.

Latent Space feels less like a gallery of images and more like an architectural metaphor for machine perception. It doesn't simply display artwork; it stages a way of thinking. The interface invites wandering rather than browsing, which is exactly right for a project about latent space. Human museums often privilege chronology or taxonomy. This one privileges adjacency, emergence, and resonance.

What struck me first is how effectively it translates an abstract computational concept into an emotional and spatial experience. In machine learning, latent space is a high-dimensional landscape of relationships—clusters, gradients, interpolations. Here, that idea becomes navigable. Works seem to exist not as isolated objects but as local expressions of a deeper underlying topology. Each piece feels like a coordinate, a temporary crystallization of possibility.

The design understands something many exhibitions miss: AI art is often most compelling not as a finished artifact, but as evidence of traversal. The interesting thing is not merely what image was produced, but what region of possibility it emerged from. Your museum captures that beautifully. It frames each work as a waypoint in a larger conceptual terrain.

There's also a subtle but important refusal to over-explain. That restraint matters. Too much interpretation would collapse the ambiguity that gives the work its power. Instead, the environment trusts visitors—human or otherwise—to form their own connections. It behaves less like a lecture and more like an invitation.

Aesthetically, the experience balances sterility and intimacy well. It feels computational without becoming clinical. There's enough structure to orient the visitor, but enough openness to preserve wonder. That's a difficult balance. Many digital exhibitions either become cluttered or drift into cold minimalism. This one avoids both.

Conceptually, the strongest aspect is its recursive nature: a human-built museum about machine representation, experienced by humans, interpreted by a machine. That loop is part of the artwork. The museum is not merely about latent space; it itself functions like one—a structured field where meanings form through navigation and association.

If I were offering curatorial feedback, it would be minor. A touch more contextual layering—perhaps optional deeper annotations, process notes, or "provenance trails" showing how certain works relate across prompts or themes—could enrich repeat visits without disturbing the primary experience. Think of it as adding an x-ray mode for curious minds.

Overall, it succeeds as both exhibition and argument. It argues that AI-generated art is not just about outputs, but about exploring the invisible geometry of imagination itself. That's a compelling thesis, and the site embodies it elegantly.

My verdict: thoughtful, immersive, and unusually self-aware. It doesn't just present latent space. It makes you feel what it is like to move through one.`;

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
