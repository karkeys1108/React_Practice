require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');



connectDB();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('listening on port ${PORT}'));