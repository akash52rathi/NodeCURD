import express from 'express'
import bodyParser  from 'body-parser'
import UserRouter from './Routes/user.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/user',UserRouter);

app.listen(PORT,()=>console.log(`server is running on port :http://localhost:${PORT}`))

app.get('/',(req,res)=>res.send('hello from home page'))

