import { execShell } from "./execShell";

export const pathLogsHandler = (path: string, statusCode: string, message: string) => {
    execShell("log.sh", [`${path}`,`${statusCode}`,`${message}`]);
}