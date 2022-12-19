import express, { Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./Router'));

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`));