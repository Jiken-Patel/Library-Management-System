const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const db = require('./config/db'); // Import the database configuration

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Library Management System API');
});
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 