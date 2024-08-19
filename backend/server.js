const express = require('express');
const connectDB = require('./db');
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const router = require('./routes/cardRoutes');

dotenv.config()

const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

connectDB()

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
