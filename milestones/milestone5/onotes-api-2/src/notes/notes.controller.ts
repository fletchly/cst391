import {RequestHandler} from "express";

export const test: RequestHandler = (req, res) => {
    // @ts-ignore
    if (req.user) {
        res.status(200).json({
            // @ts-ignore
            user: req.user
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
}