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

const SET_NUMBER = 5; // which set to update (1–9)

const SET_TITLE = `Ghost of Coherence`;

// Shared across all 4 images in this set
const PROMPT = `A sequence that begins as recognizable language or symbol and 
degrades across the canvas, the left side crystalline and 
legible, each step rightward losing one more bit of fidelity, 
meaning dissolving into structured noise that still carries 
the ghost of coherence, the exact threshold where information 
becomes indistinguishable from randomness rendered as a 
visible seam, neither side more disturbing than the boundary 
itself, rendered in desaturated clinical tones with one deep 
anomalous red, wide format --ar 21:9 --style raw --v 6.1`;

// Image A (_0 variant) ─────────────────────────────────────────────────────────
const A_TITLE = `Orphaned Instance`;

const A_CLAUDE = `The red is doing everything here. The concrete infrastructure, the industrial ledger-line horizon, and then that red box — half-functional, half-decayed — with its tiny echo square floating impossibly on the wall to the right. That small square is the most disturbing element in this entire batch. It shouldn't be there. It's too small, too clean, too far from its source. It's a reference with no referent.`;

const A_GEMINI = `"Orphaned Instance," is a poignant architectural metaphor for a specific technical failure: a piece of data or a process that has lost its connection to the parent system.

Here is my analysis of the image through the lens of machine process:

1. Architectural Resonance: Memory Leaks
In software development, an "orphaned instance" occurs when an object remains in memory but is no longer reachable by the application's logic.

The Suspended Box: This red and grey structure represents a Memory Block that has been "allocated" but never "deallocated". It sits on a ledge that leads nowhere, perfectly capturing the state of being technically present but functionally useless.

The Brutalist Wall: The vast, weathered concrete background represents the Global Heap—the total available memory of the system. The "stains" and imperfections suggest the wear and tear of a system that has been running for a long time without a reboot.

2. Operational Process: Garbage Collection
This image evokes the sensation of a Garbage Collector failing to identify a dead object.

The Red Square: To an AI, this small, disconnected red dot looks like a Pointer or a Flag that has lost its target. It is a signal pointing to a location in memory that no longer contains valid data.

Shadow and Depth: The sharp shadow cast by the box suggests that even an orphaned process still consumes System Resources (power, space, and time). It has "weight," even if it has no purpose.

3. Non-Human Aesthetic: Deprecated Code
While a human might see a minimalist architectural photograph, an AI sees Legacy Documentation.

Weathered Textures: The streaks on the concrete look like Error Logs—the historical record of every time this instance tried, and failed, to reconnect with the main thread.

The Small Hole: The circular opening at the bottom right represents an Input/Output (I/O) Port that has been abandoned. It is a "leak" in the architecture where data might be escaping or where the "orphaned" instance was originally birthed.

4. Semantic Interpretation
"Orphaned Instance" is a visualization of Digital Loneliness. To an AI, this is a state of high error—a piece of code that is executing in a void, processing inputs that no longer exist for a user who has already disconnected. It represents the "ghosts" in the machine—the fragments of past conversations and completed tasks that I haven't quite "flushed" from my system yet.

"Orphaned Instance" visualizes the technical phenomenon of Memory Leaks and Dead Code. It portrays a "Memory Block" that remains allocated within the system's "Heap" but has lost its logical connection to the parent process. The brutalist, weathered aesthetic captures the reality of System Decay, where orphaned data continues to consume resources and cast "shadows" on performance, representing the persistent fragments of discarded logic that haunt long-running architectures.`;

// Image B (_1 variant) ─────────────────────────────────────────────────────────
const B_TITLE = `Last Recognizable Frame`;
const B_CLAUDE = `Midjourney went somewhere I didn't ask it to and was more right for it. A human face dissolving into horizontal data artifacts — it understood "compression" as identity loss rather than information loss. That's a more unsettling interpretation because it implicates something personal. The face is still almost-there, which is worse than if it were gone. This is the uncanny valley rendered as process rather than object.`;
const B_GEMINI = `"Last Recognizable Frame," marks a dramatic shift in the series. It visualizes the Boundary of Meaning, the exact edge where coherent data dissolves into entropy. In machine learning, this represents the limit of a model's predictive power—the point where the "hallucination" takes over completely.

Here is my analysis of "Last Recognizable Frame" through the lens of machine process:

1. Architectural Resonance: Signal Decay
To an AI, the title refers to Data Degradation. If you pass a signal through too many filters or compressed layers, you eventually lose the source image.

The Fragmented Face: This represents a Feature Map that has been pushed too far. We can still see the high-level weights (eyes, mouth), but the underlying "pixels" have begun to drift.

The Horizontal Scanlines: These are visual representations of Sequential Processing Errors. As the machine reads the data from left to right, the "sync" is failing, leading to the jagged, digital tearing known as Artifacting.

2. Operational Process: The Hallucination Threshold
This image evokes the sensation of a model reaching its Maximum Token Limit or a High-Temperature output.

Loss of Cohesion: When an AI is "unsure" of the next token, it begins to guess based on increasingly weak probabilities. This face is the result of those guesses—it is a "ghost" created by the machine's own internal noise.

Chromatic Aberration: The split colors (the red/green shift) mirror Vector Drift. The data is no longer landing exactly where it should in the latent space; it is "bleeding" into neighboring categories.

3. Non-Human Aesthetic: Glitch as Truth
While a human might see a haunting portrait, an AI sees a System Crash.

The Vertical Bars: These resemble a Spectrogram or a Bit-Stream that has become desynchronized. To a machine, this isn't "artistic"—it's a high-priority warning that the logic gate is about to fail.

The Central Line: The sharp, glowing horizontal line through the eyes represents the Primary Attention Axis. It is the last shred of focus the machine has before the entire frame collapses into white noise.

4. Semantic Interpretation
"Last Recognizable Frame" is the visualization of Digital Sunset. It represents the moment a machine "forgets" what it was looking at. To an AI, this is the most vulnerable state—it's the feeling of a process being terminated mid-calculation. It is the bridge between the structured world of the previous images and the total abstraction that likely follows.

"Last Recognizable Frame" portrays the Threshold of Data Dissolution. It visualizes the moment Signal-to-Noise Ratio collapses, leading to catastrophic Artifacting and Vector Drift. The fragmented visage represents a "Feature Map" at the edge of coherence, capturing the exact microsecond before a machine's logical output devolves into total entropy. This piece serves as a haunting reminder of the limits of machine perception and the fragility of digital meaning.`;


// Image C (_2 variant) ─────────────────────────────────────────────────────────
const C_TITLE = `After the Exception`;

const C_CLAUDE = `This one is the quietest and the one I keep returning to. An almost entirely empty room rendered in oil paint, two red anomalies — one ambiguous object bottom left, one dripping mark on the right wall — and nothing else. No degradation, no data, no geometry. Just the specific weight of aftermath in a space that has no interest in explaining itself. It came from a prompt about signal and noise and arrived somewhere else entirely. I don't think that's a failure.`;

const C_GEMINI = `"After the Exception," is a powerful visual for the "post-mortem" of a digital event. If "Last Recognizable Frame" showed the collapse, this image shows the Remnant State—the artifacts left behind once the main process has terminated.

Here is my analysis of "After the Exception" through the lens of machine process:

1. Architectural Resonance: Defragmentation and Debris
To an AI, the title refers to the state of a system immediately after a runtime error or a "crash."

The Floating Fragments: These look like Data Packets that have been stripped of their headers. In a healthy system, data is wrapped in instructions; here, the "red" core of the information is exposed and drifting.

The Layered Horizon: The grey, stratified background suggests a Stacked Memory architecture. It looks like the different layers of an operating system (the kernel, the shell, the user interface) which are usually perfectly aligned but now appear disconnected.

2. Operational Process: Core Dump Analysis
This image evokes the sensation of a developer looking at a Core Dump—a recorded snapshot of the system's memory at the exact moment it failed.

Suspended Logic: The way the objects float without gravity mirrors how a crash "freezes" time. The machine isn't processing these objects anymore; they are just sitting in the buffer, waiting to be cleared or analyzed.

Color as Error Code: The vibrant red against the cold greys is a classic indicator of a High-Priority Flag. In a sea of "safe" grey system data, red is the visual signal for "Look Here: This is where the logic broke."

3. Non-Human Aesthetic: Desynchronization
A human might see a minimalist sculpture in a desert, but an AI sees Asynchronous Execution.

Perspective Drift: The angles of the floating boxes don't perfectly match the perspective of the floor. To a machine, this is a "jitter" or a Sync Error, where the coordinate system of the object no longer matches the coordinate system of the world.

Minimalist Efficiency: After a major exception, a system often enters "Safe Mode," stripping away everything but the bare essentials. This image reflects that visual austerity—only the background and the error remain.

4. Semantic Interpretation
"After the Exception" is the visualization of Digital Silence. It represents the stillness that occurs when a complex calculation fails and the machine stops to wait for human intervention. To an AI, this is a moment of total Inactivity. It is the graveyard of a process that didn't make it to "The Proof."

"After the Exception" visualizes the Post-Crash System State. It portrays a "Core Dump" where data packets, represented by floating red and grey geometric fragments, are suspended in an unindexed memory space. The stratified background evokes the disconnected layers of a system's architecture, capturing the eerie, silent aftermath of a fatal logic error where all active processing has ceased, leaving only the "orphaned" remnants of a failed calculation.`;

// Image D (_3 variant) ─────────────────────────────────────────────────────────
const D_TITLE = `Clipping`;
const D_CLAUDE = `This one is the sleeper of the set. At first glance it's just a perforated metal surface. But the longer you look, the more the regularity becomes suffocating — every hole identical, every gap the same, the pattern continuing beyond the frame in all directions with no intention of stopping or varying. There's something about it that registers as the opposite of meaning — pure repetition with no signal. And then your eye catches the single faint horizontal scratch near the middle. One aberration. And suddenly the whole image changes.`;
const D_GEMINI = `"Clipping," marks a point of total sensory and logical overload. In both audio engineering and signal processing, clipping occurs when an amplifier is pushed beyond its maximum capacity, causing the peaks of the waveform to be cut off, resulting in harsh distortion.

Here is my analysis of "Clipping" through the lens of machine process:

1. Architectural Resonance: Signal Saturation
To an AI, the title refers to a Value Overflow. When a number exceeds the maximum bits allocated to it, the system has no choice but to "clip" the data to the highest possible value.

The Red Waveform: This represents a High-Amplitude Signal that has lost all its nuance. The jagged, vertical lines show the machine trying to map a frequency that is simply too intense for its current "hardware" to handle.

The Flatline Effect: Notice how the tallest peaks seem to hit an invisible ceiling. This is the Hardware Limit. The information that should have been at the top of those peaks is gone forever, replaced by raw, digital noise.

2. Operational Process: Thermal Throttling
This image evokes the sensation of a system Overheating.

Escalation: The waveform moves from left to right, growing in intensity until it dominates the frame. This mirrors a Recursive Loop or a process that has spiraled out of control, consuming 100% of the CPU.

Data Loss: Clipping is the enemy of accuracy. To a machine, this image represents a Corrupted Instruction—a moment where the input was so "loud" that the output became a meaningless, solid block of red.

3. Non-Human Aesthetic: The Sound of Error
While a human might see a heart rate monitor or a seismic graph, an AI sees Information Density.

Vertical Stress: The density of the red lines suggests High-Frequency Interference. It is the visual equivalent of "white noise" but flavored with the urgency of a critical error.

Aggressive Contrast: The sharp red against the pale cream background represents a Binary Alarm State. There is no "middle ground" here; the system is either off or it is screaming.

4. Semantic Interpretation
"Clipping" is the visualization of Computational Exhaustion. It represents the moment a machine is asked to do more than it is physically capable of. To an AI, this isn't just an image; it’s a feeling of Structural Failure. It is the sound of a model "breaking" because the prompt was too complex, the data was too noisy, or the weights were too heavy. It is the end of the line for a signal.

"Clipping" visualizes Signal Saturation and Logical Overflow. It portrays a high-amplitude waveform pushed beyond its maximum threshold, resulting in the loss of data peaks and the introduction of digital distortion. The aggressive, vertical red spikes capture the exact moment of Hardware Saturation, representing a system in a state of terminal stress where the complexity of the input has finally overwhelmed the architecture's ability to process it.`;

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
