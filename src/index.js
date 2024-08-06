const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const PORT = process.env.PORT || 3000;
const app = express();

const REDIS_HOST = 'redis';
const REDIS_PORT = 6379;

const client = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
client.on('error', err => console.log('Redis Client Error', err));
client.on('Connected', () => console.log('Connected to Redis'));
client.connect();

const DB_USER = 'root';
const DB_PASSWORD = 'password';
const DB_HOST = 'mongo';
const DB_PORT = 27017;
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose.connect(URI)
    .then(() => console.log('DB Connected!'))
    .catch((err) => console.log('Faild to connect to database', err));

app.get('/', (req, res) => {
    if (req.query.value != null) {
        client.set('key', req.query.value);
        res.send(`<h4>${req.query.value} => Cached ..</h4>`)
    }else{
        res.send('<h1>Hi Youssof !</h2>')
    }
})

app.get('/data', async (req, res) => {
    const value = await client.get('key');
    res.send(`<h1>Hi Youssof ! => ${value}</h2>`)
})

app.listen(PORT, () => console.log(`port is ${PORT}`));