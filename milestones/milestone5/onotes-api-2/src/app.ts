import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from "./middleware/logger.middleware";
import authRouter from './auth/auth.routes'
import notesRouter from './notes/notes.routes'

dotenv.config();

const app = express();
const port = process.env.PORT;

// Express configuration
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use logging in dev mode
if (process.env.NODE_ENV == 'dev') {
    app.use(logger);
    console.log("App is running in development mode")
}

// Configure application routing
app.use('/auth', [authRouter]);
app.use('/api/v1', [notesRouter]);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

