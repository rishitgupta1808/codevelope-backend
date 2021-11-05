require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const path  = require('path');
const connectDb = require('./db')
const cors = require('cors');
const initRoutes = require('./routes/index');

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Initiate DB
connectDb();

//Initiate Routes
initRoutes(app);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});