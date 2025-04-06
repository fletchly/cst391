import {RequestHandler} from "express";
import {OkPacket} from "mysql";
import * as AuthDao from './auth.dao'
import bcrypt from 'bcrypt';
import {generateToken} from "../middleware/jwt.middleware";

// Create user
export const createUser: RequestHandler = async (req, res)=> {
    const { userId, username, password, role } = req.body;

    // Check for valid request
    if (!userId || !username || !password || !role) {
        res.status(400).json({
            message: "Invalid registration request"
        });
    } else {
        try {
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Attempt to create user in DB
            const okPacket: OkPacket = await AuthDao.createUser({
                userId: userId,
                username: username,
                password: hashedPassword,
                role: role
            });

            // User creation success
            res.status(201).json({
                message: "User created successfully",
                okPacket: okPacket
            });
        } catch (error) {
            // User creation failure
            res.status(500).json({
                message: "Error creating user",
                error: error
            });
        }
    }
};

// Verify user credentials
export const login: RequestHandler = async (req, res) => {
    const { username, password } = req.body;

    // Check for valid request
    if (!username || !password) {
        res.status(400).json({
            message: "Invalid login request"
        });
    } else {
        try {
            // Get user from DB
            const user = await AuthDao.readUsersByUsername(username)

            // If the username exists and password is valid
            if (user && await bcrypt.compare(password, user.password)) {
                const token = generateToken({
                    userId: user.userId,
                    username: user.username,
                    password: user.password,
                    role: user.role
                });

                res.cookie('token', token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'strict',
                    maxAge: 3600000
                });

                res.send({
                    message: "Login successful"
                });

            } else {
                // Username not found or invalid password
                res.status(401).json({
                    message: "Invalid username or password"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error logging in"
            });
        }
    }
}