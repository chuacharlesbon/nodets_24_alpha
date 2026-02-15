import { Request, Response } from 'express';
import { execShell } from '../utils/execShell';
import { pathLogsHandler } from '../utils/pathLogs';

export const shellController1 = (req: Request, res: Response): void => {
    try {
        const result = execShell("main.sh", ``);
        // Success → send shell output
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(result);
    } catch (err) {
        const errMsg = `Cannot execute shell. ${err}`;
        pathLogsHandler(req.path, "400", errMsg);
        res.status(400).send(errMsg);
    }
};