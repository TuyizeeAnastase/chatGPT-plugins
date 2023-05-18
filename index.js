require('dotenv').config();
const express = require('express');
const openai = require('openai');
const axios = require('axios');
const mongoose = require('mongoose');

openai.apiKey = process.env.OPENAI_API_KEY;

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Job = mongoose.model('Job', new mongoose.Schema({
  title: String,
  description: String,
  location: String,
}));

const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
}));

app.post('/api/chat', async (req, res) => {
  const prompt = req.body.prompt;
  const maxTokens = req.body.maxTokens || 60;

  try {
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: maxTokens,
      temperature: 0.5,
    });

    const chatResponse = response.data.choices[0].text.trim();

    if (chatResponse.includes('job openings')) {
      const jobs = await axios.get(`${process.env.COMPANY_API_URL}/jobs`);
      jobs.data.forEach(async job => {
        await Job.create(job);
      });
    }

    if (chatResponse.includes('products')) {
      const products = await axios.get(`${process.env.COMPANY_API_URL}/products`);
      products.data.forEach(async product => {
        await Product.create(product);
      });
    }

    res.json(chatResponse);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));