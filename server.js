const express = require('express');
const connectToDB = require('./config/db');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

