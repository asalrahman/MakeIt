// backend/index.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

app.get('/', async (req, res) => {
  try {
    const {main}  = require('./wallet/01_newAccount');
    const walletData = await main;
    
    
   

  
  } catch (error) {
    console.error('Error in wallet creation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
