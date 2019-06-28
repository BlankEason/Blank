const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

//添加登录路由
router.get("/v1/login/:uname-:upwd",function(req,res){
	//获取数据
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	//验证是否为空
	if (!$uname)
	{
		res.send('用户名不能为空');
		return;
	}
	if (!$upwd)
	{
		res.send('密码不能为空')
		return;
	}
	//执行sql语句
	var sql='SELECT * FROM tx_user WHERE uname=? AND upwd=?'
	pool.query(sql,[$uname,$upwd],function(err,result){
			if (err)  throw err;
			if (result.length>0)
			{
				res.send('1');
			}
			else
			{
				res.send('0');
			}
	});
});

//注册
router.put("/v1/reg",(req,res)=>{
//	获取数据
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $avatar=req.body.avatar;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	//非空验证
	//执行sql语句
	//[$uname,$upwd,$phone,$avatar,$user_name,$gender]
	var sql="insert into tx_user set uname=?,upwd=?,phone=?,avatar=?,user-name=?,gender=?";
	pool.query(sql,[$uname,$upwd,$phone,$avatar,$user_name,$gender],(err,result)=>{
		if (err) throw err;
		if (result.affectedRows>0)
		{
			res.send("1");
		}
		else
		{
			res.send("0");
		}
	});
});


module.exports=router;


