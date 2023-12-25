const openAIKey = "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"
const axios = require("axios");


const client = axios.create({
  headers: {
    'Authorization': `Bearer ${openAIKey}`,
    'Content-Type': 'application/json',
  },
});

const params = {
  model: "gpt-4-1106-preview", // GPT-3 model
  max_tokens: 100,
  temperature: 0.7,
  messages: [
    { role: "system", content: "You are a helpful translator." },
    { role: "user", content: "Translate 'Hello world, I will rule the universe!' to informal French." }
  ],
};

client.post("https://api.openai.com/v1/chat/completions", params)
  .then((result) => {
    console.log(result.data.choices[0].message.content);
  })
  .catch((err) => {
    console.error("Error:", err.message);
    if (err.response) {
      console.error("Response data:", err.response.data);
    }
  });
