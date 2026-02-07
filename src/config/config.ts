import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ?? 4000;
export const DEV_ORIGIN = process.env.DEV_ORIGIN ?? "http://localhost:4200";
export const SHELL_PATH = process.env.SHELL_PATH;