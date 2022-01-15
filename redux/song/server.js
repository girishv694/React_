const express = require('express')
const connect = require('./config/db')
const album = require('./controllers/post.controller')
const app = express();
const cors = require('cors')


app.use(express.json());
app.use(cors())
app.use('/',album);
app.listen(3001, async()=>{
    await connect();
    console.log("DB connected and server running on port 3001")
})