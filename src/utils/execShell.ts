import { execFile } from "child_process";
import path from "path";

export const execShell = (
    shellName: string,
    shellArguments: string[]
): Promise<string> => {

    const scriptPath = path.join(__dirname, `../../shell/${shellName}`);

    return new Promise((resolve, reject) => {
        execFile(scriptPath, shellArguments, (error, stdout, stderr) => {
            if (error) {
                reject(error.message);
                return;
            }

            if (stderr) {
                reject(stderr);
                return;
            }

            resolve(stdout);
        });
    });
};