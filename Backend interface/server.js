const express= require('express');
const bodyParser=require("body-parser")
const router=require("./router")
const path = require('path');
const app=express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public',express.static('public'))
//跨域
app.all("*",function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();  
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use("/",router)

app.listen("881",()=>{
    console.log('881------')
})