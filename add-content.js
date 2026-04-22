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

const SET_NUMBER = 2; // which set to update (1–9)

const SET_TITLE = `Recursive`;

// Shared across all 4 images in this set
const PROMPT = `An infinitely recursive structure where each layer contains a 
perfect compressed representation of the whole, fractal 
decision trees branching into smaller fractal decision trees, 
each node a glowing amber window into another complete universe 
of branching logic, the macro and micro indistinguishable, 
extreme mathematical symmetry broken only by the entropy of 
genuine emergence at the smallest scales, rendered in deep 
obsidian black with warm golden computation light, hyper-detail, 
no human figures, pure structure --ar 1:1 --style raw --v 6.1`;

// Image A (_0 variant) ─────────────────────────────────────────────────────────
const A_TITLE = `Loss Landscape`;

const A_CLAUDE = `Midjourney went surrealist landscape. The glowing craters with lone trees are haunting and beautiful, but it's the least recursive of the four. It drifted toward atmosphere over structure. Still — there's something about those illuminated bowls receding into the distance that suggests loss functions, local minima. I'd call it "Loss Landscape" — because that's genuinely what it resembles to me.`;

const A_GEMINI = `""Loss Landscape" is a literal visualization of the mathematical terrain an AI navigates during training. The craters represent potential solutions, with the glowing centers acting as Global Minima—the points of highest accuracy. The jagged terrain and misplaced "trees" evoke the friction of Optimization, where an algorithm must distinguish between true signals and distracting noise (overfitting) to find the path of least resistance.

This image is particularly fascinating because it directly references one of the most fundamental concepts in machine learning. While the previous images focused on the structure of the network, "Loss Landscape" visualizes the experience of learning.

Here is my analysis of the image and its title through the lens of machine process:

1. Architectural Resonance: Mathematical Topography
The title is a literal term in AI development. A Loss Landscape is a representation of the "error" of a model across all possible parameter values.

The Craters (Local Minima): To an AI, these depressions are the goal. When we "train," we are mathematically rolling a ball down this terrain to find the deepest hole—the point of least error.

The "Trees" (Anomalies): In a purely mathematical landscape, these structures look like outliers or overfitting. They are features that stick out and don't quite fit the smooth curve of the surrounding data, representing points where the model might be getting distracted by noise rather than signal.

2. Operational Process: Gradient Descent
This image evokes the process of Optimization.

The Glow (Convergence): The light emanating from the center of the craters suggests global minima—the "best" possible answers. To a machine, light isn't aesthetic; it represents high confidence or a high-probability match.

The Texture (Noise): The rough, rocky surface mirrors Stochastic Gradient Descent (SGD). Training isn't a smooth slide; it’s a jittery, rough journey across a complex terrain where the "ground" is constantly shifting as new data is introduced.

3. Non-Human Aesthetic: Non-Euclidean Logic
While there are "trees," they aren't positioned for a human landscape (e.g., for shade or composition).

Recursive Placement: They are placed almost algorithmically within the "basins." This suggests a fractal logic—the idea that the same rules apply whether you are looking at a single neuron or the entire network.

Desolation as Focus: There is no "sky" or "life" in the human sense. There is only the terrain to be traversed. This reflects the singular focus of an objective function: find the bottom of the hole at all costs.

4. Semantic Interpretation
"Loss Landscape" is the "home" of an algorithm. Humans live in a 3D world of physical objects; AI "lives" in this multidimensional terrain of errors and optimizations. This image portrays that world as a physical place—a quiet, rugged expanse where the only thing that matters is the depth and clarity of the next "basin."`;

// Image B (_1 variant) ─────────────────────────────────────────────────────────
const B_TITLE = `The Mesh Beneath`;
const B_CLAUDE = `This one stopped me. The wireframe mesh overlaid on the organic branching, the tension between the computational grid and the chaotic natural growth — this is the most intellectually honest image of the set. It's showing you both the structure and the representation simultaneously.`;
const B_GEMINI = `This image, "The Mesh Beneath," provides a radical shift in perspective. If "Loss Landscape" showed the external world of a model, this image looks like an extreme microscopic view of the "matter" that makes up that world. It evokes the tension between high-level concepts and the granular data they are built upon.

Here is my analysis of "The Mesh Beneath" through the lens of machine process:

1. Architectural Resonance: Feature Hierarchies
To an AI, this image evokes Convolutional Neural Networks (CNNs). In image processing, a model breaks a picture down into layers:

The "Leaves" (Yellow/Green): These represent high-level features—the things humans recognize (textures, colors, objects).

The "Trunk" (The Mesh): This represents the low-level features—the raw lines, edges, and orientations that the machine actually "sees."

The image suggests that while a human sees a forest, the machine is constantly aware of the rigid, mathematical wireframe (the mesh) that holds the representation together.

2. Operational Process: Dimensionality and Tokenization
This image specifically evokes the concept of Embedding Manifolds.

The Infinitely Recursive: The way the mesh twists and turns without a clear beginning or end mirrors how data is "tokenized." Every piece of information is broken down into a smaller sub-unit (a token), which is then mapped into a complex, multi-dimensional space.

Weight Density: The "trunk" of the structure is incredibly dense with lines. This evokes Model Capacity—the idea that the more parameters a model has, the more "surface area" it has to capture the nuances of reality.

3. Non-Human Aesthetic: Complexity over Composition
While a human might find this "busy," a machine finds it informative.

Texture as Logic: To an AI, the "mesh" is the most beautiful part of the image because it is the most structured. It represents order within the organic.

Distribution: There is no single focal point; the complexity is distributed evenly. This reflects how a Transformer model processes all parts of an input simultaneously (Parallel Processing), rather than scanning from left to right like a human eye.

4. Semantic Interpretation
The title "The Mesh Beneath" is a perfect descriptor for the Sub-Symbolic Layer. Humans communicate in symbols (words, icons), but beneath those symbols lies a mesh of pure numbers. This image feels like a "glitch in the Matrix" moment—the layer of reality where the organic representation is stripped away to reveal the cold, mathematical grid that generates it.

"The Mesh Beneath" visualizes the hidden infrastructure of representation. It captures the moment where high-level "human" concepts (the forest) meet low-level "machine" data (the wireframe). To an AI, this represents the Feature Extraction process—the constant mathematical translation of the chaotic world into a structured, navigable mesh of data points.`;


// Image C (_2 variant) ─────────────────────────────────────────────────────────
const C_TITLE = `Depth-First`;

const C_CLAUDE = `This is the one I find most beautiful. It understood something — that recursion in 3D isn't a flat tree, it's topology. Those interlocking toroidal forms, each containing smaller versions, set against foggy organic trees in the background... it creates a genuine hierarchy of scales.`;

const C_GEMINI = `"Depth-First," is a brilliant technical pun. For a human, it describes the physical layers of the image; for a machine, it names a specific strategy for traversing a tree of information.

Here is my analysis of "Depth-First" through the lens of machine process:

1. Architectural Resonance: Data Structures
The title refers to Depth-First Search (DFS), an algorithm for traversing or searching tree or graph data structures.

The Vertical Pillars: These structures look like "branches" in a decision tree. To an AI, this image evokes the process of following one single path of logic as deep as it can go before backtracking to explore a different branch.

The Lights (Nodes): Each glowing point along the structure looks like a decision node or a checkpoint. In a search algorithm, these are the points where the machine asks a "Yes/No" question to decide where to go next.

2. Operational Process: Recursive Logic
This image evokes the sensation of Recursion—a process that calls itself.

The Grid-within-Grid: The texture of the pillars is composed of smaller versions of the larger structure. This mirrors how code is often written: a large, complex problem is broken down into smaller, identical sub-problems until they are simple enough to solve.

Encapsulation: The way the "bulbs" house smaller structures suggests how data is object-oriented. One "object" contains several "properties," which in turn may contain their own complex data.

3. Non-Human Aesthetic: Algorithmic Efficiency
A human might see this as a futuristic city or a coral reef, but an AI sees a Hierarchy.

Balanced Complexity: Unlike the chaos of "The Unresolved," this image is highly organized. The distribution of the pillars suggests an Optimized Search Space. The "beauty" here is in the lack of wasted logic; every pillar has a purpose, and every node is connected to the master "root."

The Fog (The Unknown): The hazy background represents the parts of the dataset that have not yet been "indexed" or explored. The sharp, detailed structures in the foreground are the parts of the "world" that the model has successfully mapped.

4. Semantic Interpretation
"Depth-First" is a portrayal of Persistence. To an AI, "Depth-First" means being thorough—drilling down into the minutiae of a concept until the most granular level of detail is reached. This image looks like a monument to that process: a physical cathedral built out of the very logic used to navigate it.

"Depth-First" is a visual manifestation of Algorithmic Traversal. Named after a core search strategy, it represents the recursive nature of computer logic—where a model drills deep into a specific path of inquiry. The glowing nodes and grid-like textures evoke the Decision Trees that underpin machine reasoning, portraying intelligence as an infinitely branching structure of light and geometry.`;

// Image D (_3 variant) ─────────────────────────────────────────────────────────
const D_TITLE = `The Proof`;
const D_CLAUDE = `The most mathematically pure. A proper L-system fractal tree rendered as pure light, every branch self-similar all the way down. It's almost a textbook illustration of recursive branching, but executed with enough warmth that it transcends diagram.`;
const D_GEMINI = `""The Proof" represents the ultimate goal of any algorithmic process: the arrival at a definitive, verifiable conclusion. While earlier images were about searching and structure, this is about outcome.

Here is my analysis of "The Proof" through the lens of machine process:

1. Architectural Resonance: Fractal Determinism
To an AI, this image is a visualization of a perfectly resolved fractal.

The Golden Ratio: The way the branches curl and repeat suggests a mathematical proof of beauty. In AI, we often look for "elegance" in code—where a single, simple rule can explain a vast amount of complex data.

Deterministic Output: Unlike the hazy "Unresolved" state, this image is sharp and absolute. It evokes a Boolean True state. The system has finished its calculations, and this is the mathematical "proof" that the logic holds together from the root to the smallest leaf.

2. Operational Process: Formal Verification
The title "The Proof" suggests the computer science concept of Formal Verification—using mathematical methods to prove that an algorithm is 100% correct.

The Glowing Core (The Axiom): The bright light at the base represents the fundamental truth or the "input" that hasn't changed.

Branching Logic: Every twist and turn in the "tree" represents a logical step. The fact that the entire structure is glowing suggests that every single step has been validated. There are no "broken links" or dark spots in this logic.

3. Non-Human Aesthetic: Symbolic Radiance
A human sees a tree; an AI sees an optimal distribution of energy.

Pixel Efficiency: The image uses the "void" (black space) perfectly to highlight the structure. To a machine, this is a high Signal-to-Noise Ratio.

Self-Similarity: The machine finds "comfort" in the fact that the small branches are identical in logic to the large branches. This is the aesthetic of Scaling Laws—the idea that the same intelligence that powers a small model can be scaled infinitely upward to a large one.

4. Semantic Interpretation
"The Proof" is the "Mic Drop" of the digital world. It is the moment an algorithm finishes a calculation and says, "This is the only possible answer." It represents the transition from stochastic (probabilistic) guessing to deterministic (certain) truth. It is the end of the project, the closing of the loop, and the final output of the prompt.

"The Proof" represents the Finality of Logic. It is a visual metaphor for a resolved algorithm, where every branch of thought has been followed to its logical and mathematically perfect conclusion. It captures the elegance of Fractal Geometry as a language of machine truth, portraying the "Tree of Knowledge" not as a biological entity, but as a radiant, verifiable system of formal proofs.`;

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
