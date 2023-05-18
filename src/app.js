import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routers/index";
import morgan from "morgan";
import axios  from "axios";
const { Configuration, OpenAIApi } = require("openai");


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(cors());
app.use(routes);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  const prompt = req.body.prompt;
  const maxTokens = req.body.maxTokens || 60;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: maxTokens,
      temperature: 0.5,
    });

    const chatResponse = response.data.choices[0].text.trim();
    console.log(chatResponse)
    if (chatResponse.includes('job')) {
      const jobs = await axios.get(`http://localhost:3500/api/v1/jobs`);
      const jobList = jobs.data.jobs.map(job => `${job.name} for ${job.salary} $ with ${job.experience} years of experince`).join('\n');
      // res.json(`${chatResponse}\nHere are the job openings:\n${jobList}`);
      res.json(jobList)
    }

    if (chatResponse.includes('products')) {
      const products = await axios.get(`http://localhost:3500/api/v1/products`);
      const productList = products.data.products.map(product => `${product.name} for ${product.cost} and discount of ${product.discount} % `).join('\n');
      // res.json(`${chatResponse}\nHere are the products:\n${productList}`);
      res.json(productList)
    }

    res.json(chatResponse);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      res.status(500).json({ error: error.toString() });
      console.log(error.message);
    }
  
  }
});


const server = app.listen(PORT, console.log(`Server Listening on ${PORT} `));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {

  // close server & exit process
  server.close(() => process.exit(1));
});

export default app;



