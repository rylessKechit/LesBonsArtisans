const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
var cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const productRouter = require('./routes/products')
app.use('/products', productRouter)

app.listen(3001, () => console.log('Server Started'));