import express from "express";
import dotenv from "dotenv";
import albumsRouter from "./albums/albums.routes";
import artistsRouter from "./artists/artists.routes";
import logger from "./middleware/logger.middleware";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

// Declare and initialize
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (process.env.NODE_ENV == "development") {
  app.use(logger);
  console.log(process.env.GREETING + " in dev mode");
}

app.use("/", [albumsRouter, artistsRouter]);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
