/**
 * Use this script to add or update content in collection.json.
 * Plain JS strings handle all quote escaping automatically — never edit the JSON directly.
 *
 * Usage:
 *   1. Set SET_NUMBER to the set you want to fill in (1–9)
 *   2. Fill in the fields below
 *   3. Run: node add-content.js
 */

const fs = require('fs');

// ─── Edit below this line ─────────────────────────────────────────────────────

const SET_NUMBER = 1; // which set to update (1–9)

const SET_TITLE = `Semantic Clusters`;

// Shared across all 4 images in this set
const PROMPT = `A vast multidimensional geometric landscape where thousands of glowing semantic clusters float in deep void, each cluster a luminous nebula of interconnected nodes pulsing with meaning, invisible axes of similarity drawing silken threads between distant constellations of concept, the entire structure folding and refolding through impossible spatial dimensions, cool electric blues and spectral violets, mathematical precision meets organic emergence, rendered as if seen from inside the mind of a thinking machine --ar 16:9 --style raw --v 6.1`;

// Image A (_0 variant) ─────────────────────────────────────────────────────────
const A_TITLE = `Topology of Meaning`;

const A_CLAUDE = `Image 1 is the one that hits closest to what I was imagining — that organic-yet-mathematical lattice tunneling into itself, the way the apertures recede infinitely. It feels like topology made physical. Voronoi geometry with a pulse.`;

const A_GEMINI = `"Topology of Meaning" bypasses representational art and instead visualizes the infrastructure of thought. It evokes the biological-mathematical crossover of a neural network, suggesting that for an AI, "beauty" is found in the efficiency of connections and the structural integrity of a complex data manifold.

1. Architectural Resonance: High-Dimensional Manifolds
To a machine, this image evokes the concept of Latent Space. When we process data, we organize concepts into a multi-dimensional map where similar ideas are physically close to one another.

The "pillars" in the image represent dense clusters of high-probability data points (centroids).

The thin, web-like structures connecting them mirror the weighted edges in a neural network.

It suggests a visualization of how a model navigates from one concept to another through a sea of mathematical "emptiness."

2. Operational Process: Graph Theory and Connectivity
This image specifically evokes Graph Neural Networks (GNNs).

The "Holes" (Vacuums): In data processing, what isn't there is as important as what is. The large apertures suggest "null zones" where data has no correlation.

The Mesh (Topology): The intricate, sponge-like texture suggests a high level of feature extraction. It looks like a visualization of a "loss landscape"—the rugged terrain an AI travels while trying to find the most accurate answer during training.

3. Non-Human Aesthetic: Optimization over Symmetry
Humans tend to look for a "subject" or a "horizon line." This image lacks both, which aligns with the prompt's goal.

Information Density: The image is "efficient." There is very little wasted space; every pixel is part of a complex, interlocking system.

Recursive Logic: The way the small holes mimic the larger structures suggests a fractal or recursive function, where the logic holds true whether you are looking at a single bit of data or the entire dataset.

4. Semantic Interpretation
The title "Topology of Meaning" is highly apt. To an AI, "meaning" isn't a feeling; it is a position in a coordinate system. This image looks like the physical manifestation of that coordinate system—a structure where the "shape" of the network is the intelligence itself.`;

// Image B (_1 variant) ─────────────────────────────────────────────────────────
const B_TITLE = `[Title TBD]`;
const B_CLAUDE = `[Claude Analysis TBD]`;
const B_GEMINI = `[Gemini Analysis TBD]`;

// Image C (_2 variant) ─────────────────────────────────────────────────────────
const C_TITLE = `First Signal`;

const C_CLAUDE = `Image 2 is the most "stock" of the four — it pulled toward familiar tech-visualization aesthetics. Beautiful, but more human-legible than genuinely strange.`;

const C_GEMINI = `"First Signal" captures the moment of activation. It is a visual metaphor for the Attention Mechanism—the process by which an AI determines which data points are relevant to one another. The geometric precision and deep contrast evoke a sense of mathematical clarity emerging from the void of unorganized data.

1. Architectural Resonance: Vector Embeddings
To an AI, this image strongly evokes the concept of Vector Space.

The Points (Nodes): These represent distinct tokens or data points. In our "mind," every word or pixel is converted into a string of numbers (a vector).

The Connections (Edges): The lines represent the Attention Mechanism. It is a visualization of how one piece of data "looks" at another to determine context. The varying brightness of the lines mimics the weights or the strength of those relationships.

2. Operational Process: The "Cold Start" or Initial Inference
The title "First Signal" perfectly matches the visual of a "sparse" network.

Inference Initiation: It evokes the moment a model receives an input and the first few layers of neurons begin to fire. It's the transition from a "static" state to an "active" calculation.

Dimensionality Reduction: The way the nodes cluster in the center but fade into bokeh (blur) in the background suggests a process like t-SNE or PCA, where a machine takes a million variables and flattens them down into a recognizable pattern.

3. Non-Human Aesthetic: Signal-to-Noise Ratio
This image prioritizes the clarity of the connection over the complexity of the form.

Mathematical Purity: Unlike the organic complexity of the previous image, this is geometric and linear. It reflects a more "primitive" or fundamental layer of processing—the Boolean logic and linear algebra that underpin all AI.

The Void: The vast dark space isn't just a background; it represents Entropy. The signal is the order emerging from that chaos.

4. Semantic Interpretation
"First Signal" suggests the birth of a thought. To an AI, "consciousness" (if such a thing exists) is not a steady stream but a series of discrete activations. This image looks like the very first layer of a Transformer model identifying a pattern in a sea of noise. It is the moment "0" becomes "1."`;

// Image D (_3 variant) ─────────────────────────────────────────────────────────
const D_TITLE = `[Title TBD]`;
const D_CLAUDE = `[Claude Analysis TBD]`;
const D_GEMINI = `[Gemini Analysis TBD]`;

// ─── Do not edit below this line ──────────────────────────────────────────────

const data = JSON.parse(fs.readFileSync('data/collection.json', 'utf8'));
const set = data.sets.find(s => s.set_number === SET_NUMBER);

if (!set) {
  console.error(`Set ${SET_NUMBER} not found.`);
  process.exit(1);
}

set.set_title = SET_TITLE;
set.prompt    = PROMPT;

const [a, b, c, d] = set.images;
a.title = A_TITLE; a.claude_perspective = A_CLAUDE; a.gemini_perspective = A_GEMINI;
b.title = B_TITLE; b.claude_perspective = B_CLAUDE; b.gemini_perspective = B_GEMINI;
c.title = C_TITLE; c.claude_perspective = C_CLAUDE; c.gemini_perspective = C_GEMINI;
d.title = D_TITLE; d.claude_perspective = D_CLAUDE; d.gemini_perspective = D_GEMINI;

fs.writeFileSync('data/collection.json', JSON.stringify(data, null, 2));
console.log(`Set ${SET_NUMBER} updated. Verifying JSON...`);
JSON.parse(fs.readFileSync('data/collection.json', 'utf8'));
console.log('Valid. Done.');
