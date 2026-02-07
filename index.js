const express = require('express');
const pkg = require('./package.json')

const app = express();
const port = 4000;

app.use(express.json());
app.listen(port, () => console.log (`${pkg.name} Server is now running at port ${port}`))
