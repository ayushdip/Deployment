const express = require('express')
const app = express()

app.use('/public',express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.send("Hello from the backend");
})
app.listen(4444,()=>{
    console.log("Server started")
})