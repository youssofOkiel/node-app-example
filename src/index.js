const express = require('express');

const PORT = 4000;
const app = express();
app.get('/', (req, res) => res.send('<h1>Hi Youssof test !</h2>'))

app.listen(PORT, () => console.log(`port is ${PORT}`));