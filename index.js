import express from 'express'
import { dbConnection } from './database/dbConnections.js';
import userRouter from './src/modules/users/user.routes.js';
import messageRouter from './src/modules/messages/message.routes.js';

const app = express();
const port = 4000;

app.use(express.json());

app.use(userRouter)
app.use('/', messageRouter)

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req)
})
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

