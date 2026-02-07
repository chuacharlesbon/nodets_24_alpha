import { Request, Response } from 'express';
import { execFile } from 'node:child_process';
import path from 'node:path';

export const shellController1 = (req: Request, res: Response): void => {

    console.log("My shell controller req.method", req.method);
    // res.status(200).json({ message: "Connected to my shell controller 1" });

    const scriptPath = path.join(__dirname, '../../shell/main.sh');

    execFile(`${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end(`Stderr: ${stderr}`);
            return;
        }

        // Success → send shell output
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(stdout);
    });
};