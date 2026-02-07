import express, { Router } from "express";
import { shellController1 } from "../controllers/shellController";

const webRouter: Router = express.Router();

webRouter.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to web route."});
});

webRouter.get("/controller-1", shellController1);

export default webRouter;