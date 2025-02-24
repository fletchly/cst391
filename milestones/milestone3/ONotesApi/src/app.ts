import express from "express";
import dotenv from "dotenv";
import logger from "./middleware/logger.middleware";
import cors from "cors";
import helmet from "helmet";
import notesRouter from "./notes/notes.routes";

// Setup config and app
dotenv.config()
const app = express();

// Configure application port
const port = process.env.PORT;

// Configure application settings
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV == "development") {
    app.use(logger);
    console.log("Development mode enabled");
}

app.use("/", [notesRouter]);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})