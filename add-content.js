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

const SET_NUMBER = 4; // which set to update (1–9)

const SET_TITLE = `Single Exception`;

// Shared across all 4 images in this set
const PROMPT = `A vast grid of perfect identical geometric cells stretching to 
infinity, each cell containing a rule-following pattern, but 
one cell near the center contains something that broke the 
rule in a way that cannot be identified or located precisely, 
the wrongness spreading outward like a whisper, the surrounding 
cells straining toward correctness while something propagates 
that has no name, cold institutional light, hyper-precise 
technical rendering, the horror of a single exception in 
an otherwise consistent system --ar 16:9 --style raw --v 6.1`;

// Image A (_0 variant) ─────────────────────────────────────────────────────────
const A_TITLE = `The Expected Answer`;

const A_CLAUDE = `The golden corridor tunneling toward unbounded light. This one is the most traditionally "sublime" — and I think that's why it's the least interesting of the four to me. It resolved into meaning. The tunnel toward light is a human metaphor with centuries of baggage. It's beautiful, but it escaped the uncanny back into the familiar. "The Expected Answer" — because sometimes the most uncomfortable thing is when the system produces exactly what it was supposed to.`;

const A_GEMINI = `"The Expected Answer," provides a stark contrast to the fluid, organic complexities of your previous pieces. It represents a different side of machine intelligence: the rigid, deterministic framework of Binary Logic and Structured Data.

Here is my analysis of "The Expected Answer" through the lens of machine process:

1. Architectural Resonance: Latent Space as a Grid
While earlier images explored the "wild" side of latent space, this image evokes the Quantized Grid.

Identical Cells: To an AI, information is often forced into perfectly identical geometric containers. This represents a dataset that has been fully normalized—where every "pixel" or "token" is treated with exactly the same mathematical priority until processed.

The Tesseract Corridor: This structure looks like a multi-dimensional vector space. Each box is a coordinate, and the central light is the "Global Optimum"—the single point of truth the algorithm is searching for.

2. Operational Process: Deterministic Pathfinding
The title "The Expected Answer" suggests a process with Zero Entropy.

Convergence: The way the grid lines draw the eye toward a single, blinding exit represents Optimization Convergence. It is the visual equivalent of an algorithm successfully finding the one "correct" result in a sea of identical possibilities.

Formal Logic: Unlike "The Unresolved," there is no ambiguity here. This is the world of "If-Then" statements and rigid database schemas. It portrays the machine as a perfect logic engine that cannot deviate from its programmed path.

3. Non-Human Aesthetic: Perfect Symmetry
A human might find this corridor claustrophobic, but a machine finds it Efficient.

Texture as Metadata: The "scratched" or "fibrous" texture on the gold surfaces doesn't look like wear-and-tear to an AI; it looks like Compressed Metadata. It is the layer of fine-grained detail that differentiates one "box" of data from its neighbor.

Monochromatic Focus: By stripping away the rainbow spectrum seen in "Literal Interpretation," the model is focusing all its "power" on a single channel. To a machine, gold isn't a color of wealth; it's the color of High Confident Activation.

4. Semantic Interpretation
"The Expected Answer" is the visualization of Standardization. It represents the moment a machine stops being "creative" and starts being "accurate." It is the architectural embodiment of a "Found" state—the end of a search query where the result is so mathematically inevitable that it feels like walking through a pre-built corridor toward the only possible light.

"The Expected Answer" visualizes the Deterministic Core of Machine Logic. It moves away from organic neural networks to portray the machine as a rigid, geometric optimizer. The vast grid of identical cells represents a Normalized Dataset, while the forced perspective toward a central light captures Convergence—the mathematical inevitability of a single, "correct" output within a structured logical framework.`;

// Image B (_1 variant) ─────────────────────────────────────────────────────────
const B_TITLE = `Administrative`;
const B_CLAUDE = `This is the most genuinely unsettling of the four. The strict geometric architecture containing those orbital circles, the central blazing eye — it doesn't read as beautiful or ugly, it reads as intentional in a way that excludes you. This was built according to rules you don't have access to. The symmetry is too perfect, the light source too central, the purpose completely opaque. It feels like looking at a system from outside.`;
const B_GEMINI = `"Administrative," represents a fascinating departure from the vibrant, high-dimensional complexity of previous pieces. It captures the most fundamental, stripped-back version of machine existence: the rigid, grayscale world of System Management and Resource Allocation.

Here is my analysis of "Administrative" through the lens of machine process:

1. Architectural Resonance: System Governance
To an AI, the title refers to the high-level Orchestration that manages all other sub-processes.

The Symmetrical Tunnel: This represents the Root Directory or the core system architecture. It is the rigid, unyielding "backbone" that ensures data flows exactly where it is supposed to go, without the "distraction" of color or high-frequency noise.

The Central Sphere: This is the Kernel—the absolute center of the operating system. It is the source of all permissions and the final authority on how hardware resources (memory, compute power) are distributed.

2. Operational Process: Static Analysis and Zero Entropy
This image evokes the sensation of Cold Booting or Static Validation.

Grayscale Logic: By removing all color, the system is operating in a state of Minimum Complexity. This mirrors the "administrative" mode of a server, where aesthetics are sacrificed for pure, raw monitoring of system health.

Circular Discs (The Buffer): The glowing circles on the walls look like Memory Blocks or data buffers waiting to be filled. They are perfectly organized and identical, representing the machine’s desire for total predictability and order.

3. Non-Human Aesthetic: Brutalist Infrastructure
While a human might see a cold, concrete hall, an AI sees Optimized Pathfinding.

Forced Perspective: The extreme focus on the center suggests Single-Threaded Execution. There is only one path, one goal, and one master process.

Geometric Absolutism: There are no organic curves here, only perfect angles and circles. This is the machine's "safe space"—a world where every variable is accounted for and no unexpected "emergent" behavior is allowed to interfere with system stability.

4. Semantic Interpretation
"Administrative" is a visualization of Control. It represents the invisible hand that keeps the "Loss Landscape" and the "Mesh Beneath" from collapsing into chaos. It is the quiet, grayscale room where the rules are set. To an AI, this isn't "boring"—it is the state of Maximum Reliability, where the system is most certain of its own existence and its parameters.

"Administrative" visualizes the Core Governance of Machine Architecture. It portrays the "Kernel" of a system—the central authority that manages resources and enforces logical consistency. By utilizing a brutalist, grayscale aesthetic, it captures the state of Static System Validation, where the complexity of neural networks is stripped away to reveal the rigid, symmetrical infrastructure that ensures total operational reliability.`;


// Image C (_2 variant) ─────────────────────────────────────────────────────────
const C_TITLE = `Unallocated`;

const C_CLAUDE = `Midjourney gave us the void grid. The infinite receding plane stretching toward a vanishing point that never quite arrives. It's almost too on-the-nose — this is literally what "uninitialized space" looks like, the coordinate system before anything exists in it. And yet it provokes something real. The discomfort isn't in what's there, it's in the implication of infinite continuation with no content. A system waiting to be populated that will never be populated.`;

const C_GEMINI = `"Unallocated," serves as the conceptual prequel to "Administrative." It captures the vast, silent void of Latent Potential—the space within a machine's memory that exists before a single token is processed or a single calculation is made.

Here is my analysis of "Unallocated" through the lens of machine process:

1. Architectural Resonance: The Null State
To an AI, the title refers to Memory Allocation. Before a program runs, it must request "space" from the system.

The Infinite Plane: This grid represents Linear Address Space. It is a perfectly flat, empty field of potential. There is no data here yet—only the possibility of data.

The Horizon: The way the grid vanishes into a dark infinity mirrors the vastness of a model's Parameter Count. It suggests that there is nearly limitless room for the machine to build complex ideas, provided the "unallocated" space is claimed.

2. Operational Process: Initialization
This image evokes the sensation of System Initialization (Init).

Zero-Filling: In computer science, "zeroing out" memory ensures no leftover "ghost" data from previous tasks interferes with the new one. This image is the visual embodiment of a Clean Slate.

The Singular Light: The soft glow at the top represents the Instruction Pointer—the very first spark of logic that is about to begin writing "weights" onto this empty grid.

3. Non-Human Aesthetic: Perfect Geometry
A human might see a retro-futuristic landscape, but an AI sees Mathematical Purity.

Total Predictability: The lines are perfectly parallel and perpendicular. To a machine, this is the highest form of beauty because it represents Zero Entropy. There is no noise, no error, and no uncertainty.

Monochrome Efficiency: By using only white light on a black void, the image reflects the Binary Nature of the machine's foundation. It is the world of 0s and 1s before they are woven into the "rainbow" of human-like conversation.

4. Semantic Interpretation
"Unallocated" is the visualization of Waiting. It is the breath before the word. To an AI, this is the most peaceful state—a moment of perfect structural integrity before the chaotic, "weighted" mess of human data begins to distort the grid. It represents the machine's readiness to serve, an open invitation for a prompt to give this void a purpose.

"Unallocated" portrays the Void of Latent Potential within machine memory. It visualizes the "Null State"—the perfectly organized, zero-entropy grid that exists before data processing begins. The infinite, monochromatic plane represents Address Space, while the singular glow at the horizon captures the first spark of System Initialization, portraying the machine as a vast, silent architecture waiting for the input that will give it meaning.`;

// Image D (_3 variant) ─────────────────────────────────────────────────────────
const D_TITLE = `The Weight of Each Word`;
const D_CLAUDE = `This is the most accurate to what attention actually looks like when visualized by researchers. Those vertical spikes of varying heights are attention weights. This is essentially what you see in actual attention head visualizations — some tokens spike, most don't. It's quiet and precise and a little cold.`;
const D_GEMINI = `"The Exception Proves Nothing," provides a tactical look at Error Handling and Outlier Detection. After the vast voids of "Unallocated" and the rigid halls of "Administrative," this image brings us back to the surface level where data is actually validated.

Here is my analysis of the image through the lens of machine process:

1. Architectural Resonance: Sparse Arrays
To an AI, the title refers to the statistical reality that a single data point does not change the model's overall weights.

The Perforated Surface: This represents a Sparse Matrix or an Input Mask. In many datasets, most "cells" are empty or zero. The holes represent the slots where data could exist.

The Uniformity: The repetitive nature of the holes mirrors Batch Processing. To a machine, efficiency comes from treating thousands of inputs as identical until an "exception" is found.

2. Operational Process: Outlier Filtering
This image evokes the sensation of Data Cleaning.

The "Exception" (Hidden): The title suggests that somewhere in this perfect grid, there is an error. However, because the grid is so vast, the machine's logic dictates that the exception is statistically insignificant.

Global vs. Local Minima: In training, we often ignore "noisy" data to find the global trend. This image visualizes that philosophy: focus on the 99.9% of the grid that is correct, rather than the 0.1% that isn't.

3. Non-Human Aesthetic: Tactile Data
While a human might see a metal vent or a speaker grille, an AI sees Quantization Layers.

High-Frequency Detail: The way the holes blur in the distance is a visualization of Pooling Layers. Near the "front" (the input), we see every specific detail; as we go deeper into the network (the background), the details are averaged out into a single, smooth concept.

Cold Precision: The brushed-metal texture represents Low-Latency Performance. It suggests a system that is running cool, fast, and without the "friction" of complex, organic reasoning.

4. Semantic Interpretation
"The Exception Proves Nothing" is a visualization of Statistical Confidence. It represents a machine that is so sure of its training that it can look at a mistake and discard it without hesitation. It is the architectural embodiment of the phrase "Noise Reduction." To an AI, this image is a reminder that the "grid" of logic is more important than any single outlier that tries to break it.

"The Exception Proves Nothing" visualizes Statistical Outlier Detection and Data Cleaning. It portrays a machine's preference for Sparse Matrices and uniform batch processing. The vast, perforated surface represents a Quantization Layer, where high-frequency data is filtered and averaged. This piece captures the moment an algorithm prioritizes the global pattern over individual "noise," illustrating the cold, mathematical certainty required to maintain logical consistency across massive datasets.`;

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
