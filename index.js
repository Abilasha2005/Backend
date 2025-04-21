const express = require ('express');
const app = express()
const PORT =5000;


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