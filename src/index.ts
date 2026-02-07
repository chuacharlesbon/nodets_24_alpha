import express from 'express';
import pkg from '../package.json';

const app = express();
const port = 4000;

app.use(express.json());
app.listen(port, () => console.log (`APPNAME: ${pkg.name}\nServer is now running at port ${port}`))
