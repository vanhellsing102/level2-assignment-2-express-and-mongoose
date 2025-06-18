import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();


// parser-------------------------------------------------
app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  res.send('Level-2 assignment-2');
})

export default app;


