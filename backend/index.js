const express = require('express');
const app = express();
const PORT = 3001;

const cors = require('cors');
const { ofetch } = require('ofetch');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Backend is working!");
})

app.get('/news', async (req, res) => {
    let result = await ofetch('https://newsapi.org/v2/everything?q=blackpink&from=2022-12-26&sortBy=publishedAt&apiKey=03943003d61f4f5c9e9bc88d929c27ad');
    res.send(result);
})

app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
})