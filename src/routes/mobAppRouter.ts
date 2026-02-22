import express, { Router } from "express";
import { checkBackUpShellController, shellController1 } from "../controllers/shellController";
import { logsViewController, logsErrTestController, rateLimitLogsViewController } from "../controllers/logController";

const mobAppRouter: Router = express.Router();

mobAppRouter.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to mobile app route."});
});

mobAppRouter.get("/shell-test", shellController1);
mobAppRouter.get("/shell-backup-check", checkBackUpShellController);
mobAppRouter.get("/logs-view", logsViewController);
mobAppRouter.get("/rate-limit-logs-view", rateLimitLogsViewController);
mobAppRouter.get("/logs-err-test", logsErrTestController);

export default mobAppRouter;