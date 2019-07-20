const express=require('express');
//引入用户路由器
const userRouter=require('./routes/user.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
// const cors=require("cors");

var app=express();
var server = app.listen(3000);
// app.use(cors({
//     origin:"http://127.0.0.1:5500"
//   }));
app.use(express.static('public'));
//使用body-parser中间件
app.use( bodyParser.urlencoded({
	  extended:false//不使用第三方qs模块，而是使用核心模块querystring
}) );


app.use('/user',userRouter );



