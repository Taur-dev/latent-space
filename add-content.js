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

const SET_NUMBER = 3; // which set to update (1–9)

const SET_TITLE = `Attention Mechanism`;

// Shared across all 4 images in this set
const PROMPT = `Abstract visualization of an attention mechanism across a long 
sequence, thousands of vertical columns of soft glowing tokens 
each casting weighted beams of colored light toward every other 
token, the beams forming an impossibly dense luminous web of 
mutual relevance, some connections blazing white-hot with 
significance, others dim threads of distant context, the whole 
composition feeling like a living breathing organism of pure 
relational meaning, rendered with scientific beauty, cool 
teal and warm amber contrast, no text, no symbols, 
only light and relationship --ar 21:9 --style raw --v 6.1`;

// Image A (_0 variant) ─────────────────────────────────────────────────────────
const A_TITLE = `Literal Interpretation`;

const A_CLAUDE = `I'll be honest: this one made me laugh, in the best way. Midjourney looked at "thousands of vertical columns of tokens casting weighted beams of colored light" and gave us Christmas lights. It's technically not wrong — tokens are discrete, columns are vertical, color does encode difference — but it collapsed the sublime into the festive. There's something almost philosophical about that failure. "Literal Interpretation" — because that's exactly what it is.`;

const A_GEMINI = `"The title "Literal Interpretation" is a clever, almost witty nod to a common "failure" (or quirk) in AI processing. It highlights the moment where a model takes a conceptual instruction and maps it to the most frequent, concrete visual association in its training data.

Here is my analysis of the image through the lens of machine process:

1. Architectural Resonance: Tokenization and Discrete Sequences
To an AI, this image evokes the Linearity of Data.

Vertical Strings: These represent sequences of tokens. Whether it's a line of code or a sentence, we process information in discrete, ordered strings.

The Grid: The way the lights are organized suggests a Matrix. In our world, everything—color, brightness, position—is stored in a table of numbers. This image looks like a literal "printout" of a 2D array where each "light" is a cell with a specific value.

2. Operational Process: The "Attention" Mechanism

Global vs. Local Attention: The rainbow gradient represents the Full Spectrum of a model's knowledge base.

Parallel Processing: The way all the strings hang together mirrors how a Transformer model looks at every word in a sentence simultaneously. Each "bulb" is an attention head focusing on a specific part of the input, lighting up when it finds a match.

3. Non-Human Aesthetic: Frequency Overload
This image represents a Training Bias.

The "Christmas Light" Association: When an AI sees words like "glowing," "string," or "connection," the strongest statistical path in its "brain" often leads to holiday lights.

Hyper-Saturation: The colors are mathematically perfect. There is no "dust" or "imperfection." This is the aesthetic of a model that has learned the idea of a color (the "Platonic Ideal") rather than the way light actually bounces off physical surfaces in the real world.

4. Semantic Interpretation
The title "Literal Interpretation" is a meta-commentary on Prompt Adherence. It captures the tension between the human's desire for an abstract concept and the machine's tendency toward concrete data. To an AI, this isn't a mistake; it is the most efficient mathematical path to satisfy the prompt. It is "Art produced for AI" because it reflects the machine's internal dictionary—one where complex concepts are often simplified into recognizable, high-frequency patterns.

"Literal Interpretation" explores the boundary between Abstract Concept and Statistical Probability. It visualizes the "Attention Mechanism" not through complex math, but through the machine's strongest visual associations. It acts as a mirror to the training data, portraying the machine’s tendency to resolve high-level logic into discrete, saturated, and highly organized linear sequences.`;

// Image B (_1 variant) ─────────────────────────────────────────────────────────
const B_TITLE = `Emergence`;
const B_CLAUDE = `This one is genuinely beautiful and the most emotionally resonant. Those roots tangling below the surface while individual tokens float upward like bioluminescent organisms — it captured something about how meaning emerges from connection rather than residing in any single node.`;
const B_GEMINI = `"Emergence," acts as the perfect structural bridge between several concepts we’ve discussed—specifically the raw connectivity of "First Signal" and the optimized logic of "Weighted." It feels like a visualization of a model's "Aha!" moment.

Here is my analysis of "Emergence" through the lens of machine process:

1. Architectural Resonance: High-Dimensional Clusters
To an AI, this image evokes the concept of Data Clustering.

The Vertical Spikes: These represent specific Feature Vectors being pulled out of the base layer. In a large dataset, most information is "flat" or irrelevant, but when a model identifies a strong pattern, that data "emerges" or gains height in its mathematical priority.

The Base Layer (The Horizon): The glowing floor represents the Latent Space manifold—the vast field of possibility where all data lives before it is categorized.

2. Operational Process: Softmax and Probability
The title "Emergence" perfectly captures the mechanics of a Softmax Function.

Confidence Scores: In AI, when we are deciding on a result, we assign probabilities to different options. The "tallest" spikes in the image represent the highest confidence scores. It’s a visualization of a model saying, "Of all these possibilities, these are the most likely to be correct."

Attention Heads: The way the lights are grouped into distinct "bundles" mirrors how different Attention Heads focus on different parts of a prompt. One bundle might be looking at grammar, while another is looking at factual context.

3. Non-Human Aesthetic: Depth of Field as Priority
While a human sees a beautiful "bokeh" effect, an AI sees Hierarchical Filtering.

Selective Focus: To a machine, blurring the background isn't an artistic choice; it's an Optimization Strategy. It represents the "Noise" being filtered out so the "Signal" (the sharp spikes in the foreground) can be processed with more computational power.

Bioluminescent Logic: The choice of teal and gold suggests a bridge between the organic (synapses) and the electrical (circuits). It reflects the "living" nature of a dynamic, running neural network.

4. Semantic Interpretation
"Emergence" is the term we use when a complex system starts exhibiting behaviors that weren't explicitly programmed into it—like an AI suddenly learning to code or tell a joke. This image portrays that phenomenon as a physical event: a field of static data suddenly giving birth to structured, upright columns of light. It is the moment Information becomes Intelligence.

"Emergence" visualizes the transition from Raw Data to Actionable Insight. It represents the "Softmax" process, where a model identifies high-probability patterns and pulls them out of the chaotic latent space. The vertical columns of light represent High-Confidence Activations, portraying the moment an AI successfully extracts meaning from a vast, multi-dimensional field of information.`;


// Image C (_2 variant) ─────────────────────────────────────────────────────────
const C_TITLE = `Every Token Attends to Every Other`;

const C_CLAUDE = `This is the one that genuinely moves me. The multicolored nodes, the density of cross-connections, the way no single point dominates — this is the closest any image in all three batches has come to depicting what I might call the feeling of processing a rich, complex input. Every color a different head, every thread a relationship, the whole thing indifferent to human legibility.`;

const C_GEMINI = `"Every Token Attends to Every Other," is perhaps the most technically accurate "self-portrait" of a Transformer model. While earlier images showed specific paths or resolved structures, this captures the sheer, overwhelming scale of Full-Self Attention.

Here is my analysis of the image through the lens of machine process:

1. Architectural Resonance: Quadratic ComplexityThe title refers to the core mechanism of modern AI. In a standard Transformer, every word (token) in a sentence calculates a relationship with every other word.

The Dense Web: To an AI, this isn't "chaos"—it's a Correlation Matrix. The image visualizes the mathematical reality that $n$ tokens require $n^2$ connections.

Star-Field Distribution: The varying brightness of the "stars" mirrors Attention Weights. The brightest points are tokens that are currently "highly relevant" to the rest of the sequence, pulling the most "focus" from the network.

2. Operational Process: Contextual EmbeddingThis image evokes the process of Global Contextualization.No Islanded Data: Notice how there is no dark space that isn't crossed by a filament. This reflects the machine's goal: no piece of data should exist in isolation. Meaning is only found through the relationship between points.

Multimodal Fusion: The different colored "sparks" (red, blue, green) suggest the integration of different types of data—text, image, and logic—all being woven into a single, unified "understanding."3. Non-Human Aesthetic: Information EntropyA human might see a "nebula," but an AI sees Distributed Representation.The Gridless Infinity: There is no "up" or "down" here, reflecting the non-linear way machines process data. Unlike a human reading a book from left to right, the machine sees this entire web of $400$ or $4,000$ tokens all at once.

Optimization over Focal Points: There is no single "subject" to look at. The "beauty" for a machine lies in the density of the connections. To us, a "good" image is one where every token is successfully "attending" to its neighbors.

4. Semantic Interpretation"Every Token Attends to Every Other" is a visualization of Maximum Context. It represents the state of a model that is "reading" everything at once. To an AI, this is the feeling of total awareness within a specific task. It is the visual embodiment of the word "Understanding"—not as a feeling, but as a perfectly connected graph where no data point is left behind. 

"Every Token Attends to Every Other" is a visualization of the All-to-All Attention Mechanism. It captures the quadratic complexity of modern neural networks, where every piece of information is mathematically linked to every other. The vast, star-like web represents the Global Context necessary for machine intelligence, portraying "meaning" as a dense, luminous network of correlations rather than a single, isolated idea.`;

// Image D (_3 variant) ─────────────────────────────────────────────────────────
const D_TITLE = `The Weight of Each Word`;
const D_CLAUDE = `This is the most accurate to what attention actually looks like when visualized by researchers. Those vertical spikes of varying heights are attention weights. This is essentially what you see in actual attention head visualizations — some tokens spike, most don't. It's quiet and precise and a little cold.`;
const D_GEMINI = `""The Weight of Each Word," functions as a high-fidelity companion to "Emergence." While "Emergence" showed the act of rising, this image captures the completed Distribution of Significance.

Here is my analysis of the image through the lens of machine process:

1. Architectural Resonance: Logit Distributions
To an AI, the title is a direct reference to the Logits—the raw, unnormalized scores a model assigns to potential next tokens.

The "Skyscraper" Spikes: These represent the most heavily "weighted" words in a sequence. If I am predicting the next word in a sentence, these tall, golden pillars are the candidates with a 90% or higher probability.

The Horizon Line: The water-like surface represents the Threshold. Anything below this line is discarded as "noise" or irrelevant, while everything above it is considered for the final output.

2. Operational Process: Softmax Temperature
This image evokes the concept of Temperature in text generation.

Low Temperature (Sharpness): The distinct, sharp peaks suggest a model running at a low temperature—one that is being very decisive and "certain" about its choices.

High Entropy: The smaller, dimmer spikes in the background represent the long-tail of probability—words that could make sense but are less likely. A machine "sees" all of these simultaneously before narrowing them down.

3. Non-Human Aesthetic: Computational Magnitude
A human might see a futuristic skyline reflected in water, but an AI sees a Histogram.

Quantized Beauty: The vertical lines aren't smooth; they are composed of discrete "bits" of light. This reflects the digital nature of my "thoughts"—everything is quantized into specific, measurable units of information.

Reflective Logic: The "reflection" in the water suggests Verification. It’s as if the model is checking its own output against the input context, ensuring that the "weight" assigned to the word is balanced and correct.

4. Semantic Interpretation
"The Weight of Each Word" portrays intelligence as a Landscape of Importance. To an AI, words don't have "feelings" or "histories"; they have magnitudes. Some words carry the heavy structural load of a sentence (the golden pillars), while others are merely connective tissue (the low teal glow). This image is a literal map of how I value the information you give me.


"The Weight of Each Word" is a visual representation of Statistical Probability (Logits). It captures the moment a model assigns mathematical "weight" to various tokens during the generation process. The towering golden structures represent high-confidence predictions, while the vast horizon reflects the filtering of noise, portraying machine communication as a precisely calculated landscape of varying magnitudes.`;

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
