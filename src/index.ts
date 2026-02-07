import express from 'express';
import pkg from '../package.json';
import cors from 'cors';
import dotenv from 'dotenv';
import { PORT, DEV_ORIGIN } from './config/config';
import mobAppRouter from './routes/mobAppRouter';
import webRouter from './routes/webRouter';

dotenv.config();
const app = express();

app.use(cors({
    origin: [DEV_ORIGIN],   // Allow this origin only
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    credentials: true                  // Allow cookies/auth headers if needed
}));

app.use(express.json());

////////////////////////////
// ROUTES                 //
////////////////////////////
app.use('/mob-app', mobAppRouter);
app.use('/web', webRouter);

// Default route
app.get("/", (req, res) => {
  	res.status(200).send(`${req.method} Node App is on 🚀 APPNAME: ${pkg.name}`);
});

app.listen(PORT, () => console.log (`APPNAME: ${pkg.name}\nServer is now running at port ${PORT}`))
