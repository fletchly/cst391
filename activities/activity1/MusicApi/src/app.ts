import express from "express";
import dotenv from "dotenv";
import albumsRouter from "./albums/albums.routes";
import artistsRouter from "./artists/artists.routes";

dotenv.config();

// Declare and initialize
const app = express();
const port = process.env.PORT;

app.use("/", [albumsRouter, artistsRouter]);

app.listen(port, () => {
  console.log(`App listening on http://localhost://${port}`);
});
