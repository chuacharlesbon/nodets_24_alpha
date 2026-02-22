import { Request, Response } from 'express';
import { execShell } from '../utils/execShell';
import { pathLogsHandler } from '../utils/pathLogs';

export const shellController1 = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await execShell("main.sh", []);
        // Success → send shell output
        res.type("text/plain").send(result);
    } catch (err) {
        const errMsg = `Cannot execute shell. ${err}`;
        pathLogsHandler(req.path, "400", errMsg);
        res.status(400).send(errMsg);
    }
};

export const checkBackUpShellController = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await execShell("checkBackUpDir.sh", []);
        // Success → send shell output
        res.type("text/plain").send(result);
    } catch (err) {
        const errMsg = `Cannot execute shell. ${err}`;
        pathLogsHandler(req.path, "400", errMsg);
        res.status(400).send(errMsg);
    }
};