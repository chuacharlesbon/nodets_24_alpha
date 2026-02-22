import express, { Router } from "express";
import { logsViewController, rateLimitLogsViewController, logsErrTestController } from "../controllers/logController";
import { shellController1, checkBackUpShellController } from "../controllers/shellController";

const shellRouter: Router = express.Router();

//////////////////////////////////
// V1 Shell Route               //
//////////////////////////////////

const shellV1Router: Router = express.Router();
shellRouter.use('/v1', shellV1Router);
shellV1Router.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to shell route."});
});

shellV1Router.get("/shell-test", shellController1);
shellV1Router.get("/shell-backup-check", checkBackUpShellController);
shellV1Router.get("/logs-view", logsViewController);
shellV1Router.get("/rate-limit-logs-view", rateLimitLogsViewController);
shellV1Router.get("/logs-err-test", logsErrTestController);

//////////////////////////////////
// V2 Shell Route               //
//////////////////////////////////

const shellV2Router: Router = express.Router();
shellRouter.use('/v2', shellV2Router);
shellV2Router.get("/ping", (req, res) => {
    console.log("Request Method", req.method);
    res.status(200).json({message: "Connected to shell route."});
});

export default shellRouter;