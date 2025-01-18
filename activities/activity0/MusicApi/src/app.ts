import express, { Request, Response } from "express";

// Declare and initialize
const app = express();
const port = 3000;

// Route at the root path
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from TypeScript!");
});

// Listen on specified port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
