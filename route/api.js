const express =require("express")
const Data =require("../model/user")
const app=express()

module.exports = function (router) {

router.get("/",(req,res)=>{
    Data.find({}).exec(function (err, user) {
        if (err) throw err;
        if (!user) {
            res.json({ success: fale, message: 'User not found' });
        } else {
            res.json({ success: true, message: 'get details Successfully', data: user });
        }
    })

});
router.post("/post",async(req,res)=>{
    const user =new  Data()
    user.Name=req.body.Name;
    user.Email=req.body.Email;
    user.Password=req.body.Password;
    user.Mobilenumber=req.body.Mobilenumber;
    user.save((err)=>{
        if(err){
            console.log(err)
        }else{
            res.json({success:true , message:"register successful"})
        }
    })
       
})
    return router;
}