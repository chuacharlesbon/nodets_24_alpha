import { execShell } from "./execShell";

export const rateLimitHandler = (clientIp: string, path: string) => {
    execShell("rateLimitLog.sh", `${clientIp} ${path}`);
}