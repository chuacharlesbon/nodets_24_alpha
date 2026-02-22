import express, { Router } from "express";
import shellRouter from "./shellRouter";

const webRouter: Router = express.Router();
webRouter.use("/shell", shellRouter);

webRouter.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to web route."});
});

export default webRouter;