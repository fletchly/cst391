import jwt from 'jsonwebtoken';
import {User} from '../auth/auth.model';
import {Request, Response, NextFunction} from 'express';

export const generateToken = (user: User) => {
    return jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: '1d' });
};

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.cookies.token
    jwt.verify(token!, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }
        // @ts-ignore
        req.user = decoded as User;
        next();
    });
};

export default validateToken;