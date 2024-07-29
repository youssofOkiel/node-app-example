const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
app.get('/', (req, res) => res.send('<h1>Hi Youssof !</h2>'))

app.listen(PORT, () => console.log(`port is ${PORT}`));