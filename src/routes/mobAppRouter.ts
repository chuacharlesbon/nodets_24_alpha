import express, { Router } from "express";
import { shellController1 } from "../controllers/shellController";

const mobAppRouter: Router = express.Router();

mobAppRouter.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to mobile app route."});
});

mobAppRouter.get("/controller-1", shellController1);

export default mobAppRouter;