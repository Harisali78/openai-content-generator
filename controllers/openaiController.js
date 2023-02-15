const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const generateContent = async (req, res) => {
  const maxWords = 1000;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-001",
      prompt: req.body.prompt,
      max_tokens: maxWords,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json(completion.data.choices[0].text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};
module.exports = generateContent;
