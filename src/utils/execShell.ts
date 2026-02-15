import { execFile } from "child_process";
import path from "path";

export const execShell = (shellName: string, shellArguments: string): string => {

    const scriptPath = path.join(__dirname, `../../shell/${shellName}`);

    execFile(`${scriptPath} ${shellArguments}`, (error, stdout, stderr) => {
        if (error) {
            return error.message;
        }
        if (stderr) {
            return stderr;
        }

        // Success → send shell output
        return stdout;
    });

    return "OK"
}