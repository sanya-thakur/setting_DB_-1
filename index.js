const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const app = express();
const port = 3010;
const mongoose=require('mongoose');
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
mongoose.connect(process.env.MONGO_URI).then(()=> console.log('Connected to database.')).catch((err)=>console.log('Error connecting to database: ', err));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
