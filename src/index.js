const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();


const DB_USER = 'root';
const DB_PASSWORD = 'password';
const DB_HOST = 'mongo';
const DB_PORT = 27017;
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose.connect(URI)
.then(() => console.log('DB Connected!'))
.catch((err) => console.log('Faild to connect to database', err));

app.get('/', (req, res) => res.send('<h1>Hi Youssof !</h2>'))
app.listen(PORT, () => console.log(`port is ${PORT}`));