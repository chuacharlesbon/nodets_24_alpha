import express, { Router } from "express";
import { shellController1 } from "../controllers/shellController";
import { logsController1, logsErrTestController } from "../controllers/logController";

const mobAppRouter: Router = express.Router();

mobAppRouter.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to mobile app route."});
});

mobAppRouter.get("/shell-test", shellController1);
mobAppRouter.get("/logs-view", logsController1);
mobAppRouter.get("/logsErrTestController", logsErrTestController);

export default mobAppRouter;