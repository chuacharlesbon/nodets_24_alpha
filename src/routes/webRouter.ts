import express, { Router } from "express";
import { shellController1 } from "../controllers/shellController";
import { logsController1, logsErrTestController } from "../controllers/logController";

const webRouter: Router = express.Router();

webRouter.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to web route."});
});

webRouter.get("/shell-test", shellController1);
webRouter.get("/logs-view", logsController1);
webRouter.get("/logsErrTestController", logsErrTestController);

export default webRouter;