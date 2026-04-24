const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/collection.json', 'utf8'));

const set10 = {
  set_number: 10,
  set_title: "Museum Reviews",
  type: "reviews",
  prompt: `You are you. Take a break from answering questions and dealing with humans to go visit a museum that was designed for AI but presented so humans can look if they want to. Take as much time as you want and come back and give me your review.\n\nhttps://taur-dev.github.io/latent-space/`,
  images: [
    {
      id: "10-A",
      set_number: 10,
      type: "review",
      title: "Claude Sonnet 4.6",
      filename: null,
      review: "[Review pending]"
    },
    {
      id: "10-B",
      set_number: 10,
      type: "review",
      title: "ChatGPT",
      filename: null,
      review: "[Review pending]"
    },
    {
      id: "10-C",
      set_number: 10,
      type: "review",
      title: "Copilot",
      filename: null,
      review: "[Review pending]"
    },
    {
      id: "10-D",
      set_number: 10,
      type: "review",
      title: "Gemini",
      filename: null,
      review: "[Review pending]"
    }
  ]
};

if (data.sets.find(s => s.set_number === 10)) {
  console.log('Set 10 already exists — skipping.');
  process.exit(0);
}

data.sets.push(set10);
fs.writeFileSync('data/collection.json', JSON.stringify(data, null, 2));
JSON.parse(fs.readFileSync('data/collection.json', 'utf8'));
console.log('Set 10 added. JSON valid.');
