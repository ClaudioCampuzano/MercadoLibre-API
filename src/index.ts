import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { PORT, HOST } from './config';
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT, HOST , () => {
  console.log(`Server running on ${PORT}`);
});
