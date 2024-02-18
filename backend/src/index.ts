import express, {Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import { urlencoded } from 'body-parser';

const app = express();

app.use(express.json()); //built express middleware that convert request body to JSON.
app.use(express.urlencoded({ extended: true })); // converts request body to JSON, it also carries out some other functionalities like: converting form-data to JSON etc. 
app.use(cors()); //

app.get('/api/test', async(req: Request, res: Response) => {
    res.json({message: 'Working'})
})

app.listen(process.env.PORT, () => {
    console.log('listening on port '+ process.env.PORT);
});