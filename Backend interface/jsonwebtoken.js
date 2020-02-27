const jwt =require("jsonwebtoken");
const key="今天心情好不好?"
module.exports={
    //签发
    //payload  验证信息
    //key  密钥
    //expiresIn  签发过期时间
    sign(payload,time){
        return jwt.sign(payload,key,{expiresIn:time});
    },
    //验证
    
    verify(token,callback){
        jwt.verify(token,key,callback);
    }
}
