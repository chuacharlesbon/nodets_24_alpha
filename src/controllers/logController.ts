import { Request, Response } from 'express';
import path from "node:path";
import fs from "node:fs/promises";
import { pathLogsHandler } from '../utils/pathLogs';

export const logsController1 = async (req: Request, res: Response): Promise<void> => {
    try {
        const logPath = path.join(process.cwd(), "shell", "log.txt");
        const logs = await fs.readFile(logPath, "utf8");

        res.type("text/plain").send(logs);
    } catch (err) {
        const errMsg = `Cannot read log. ${err}`;
        pathLogsHandler(req.path, "500", errMsg);
        res.status(500).send(errMsg);
    }
};

export const logsErrTestController = async (req: Request, res: Response): Promise<void> => {
    const errMsg = "Test log error.";
    pathLogsHandler(req.path, "400", errMsg);
    res.status(400).send(errMsg);
};

