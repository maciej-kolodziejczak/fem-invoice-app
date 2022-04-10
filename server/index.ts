import dotenv from 'dotenv';
import express, { Response } from 'express';

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.get('/', (_, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
});