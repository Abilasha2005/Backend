const express = require ('express');
const routes = require('./userRouter');
const app = express()
const PORT =5000;

app.use('/api',routes)

app.listen(PORT,async()=>{
    try{
        console.log (`Server is running on port ${PORT}`)
    }
    catch(error){
        console.error(error);
    }
});


 app.get('/',(req,res)=>{
    res.send("Hello world")
 });