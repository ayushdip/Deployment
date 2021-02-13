const express = require('express')
const app = express()
const SERVER_PORT = process.env.PORT || 3333
app.use('/public',express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.send("Hello from the backend");
})
app.listen(SERVER_PORT,()=>{
    console.log("Server started")
})