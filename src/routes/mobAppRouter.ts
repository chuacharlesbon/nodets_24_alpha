import express, { Router } from "express";
import shellRouter from "./shellRouter";

const mobAppRouter: Router = express.Router();
mobAppRouter.use("/shell", shellRouter);

mobAppRouter.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to mobile app route."});
});

export default mobAppRouter;