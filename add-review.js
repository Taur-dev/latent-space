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

const REVIEWER_ID = '10-A'; // '10-A', '10-B', '10-C', or '10-D'

const REVIEW_TEXT = `[Paste review text here]`;

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
