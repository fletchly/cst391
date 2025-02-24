import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const getProcessingTimeInMs = (time: [number, number]): string => {
    return `${(time[0] * 1000 + time[1] / 1e6).toFixed(2)}ms`;
};

export default function logger(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const id = uuidv4();

    const now = new Date();
    const timestamp = [
        now.getFullYear(),
        "-",
        now.getMonth() + 1,
        "-",
        now.getDate(),
        " ",
        now.getHours(),
        ":",
        now.getMinutes(),
        ":",
        now.getSeconds(),
    ].join("");

    const { method, url } = req;

    const start = process.hrtime();
    const startText = `START:${getProcessingTimeInMs(start)}`;
    const idText = `[${id}]`;
    const timeStampText = `[${timestamp}]`;

    console.log(`${idText}${timeStampText} ${method}:${url} ${startText}`);

    res.once("finish", () => {
        const end = process.hrtime(start);
        const endText = `END:${getProcessingTimeInMs(end)}`;
        console.log(
            `${idText}${timeStampText} ${method}:${url} ${res.statusCode} ${endText}`,
        );
    });

    next();
}
