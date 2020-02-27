const express = require("express")
const router = express.Router()
const mongodb = require("mongodb")
const mongo = require("./dblianjie")
const jet = require("./jsonwebtoken")
const ObjectId = mongodb.ObjectId

// 分类
router.get('/Data',(req,res)=>{
    mongo('find','root',{},(data)=>{
        res.send(data)
    })
})

// // 购物车
// router.get('/forus',(req,res)=>{
//     mongo('find','gwcar',{},(data)=>{
//         // console.log(data)
//         res.send(data)
//     })
// })








module.exports=router;        