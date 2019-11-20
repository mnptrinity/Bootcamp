const express=require('express');
const router=express.Router();


router.get('/search',function(req,res,next){
    res.status(200).json({id: 1, name: "Harry Potter", author: "J.K. Rowling"});
});

router.post('/add',function(req,res,next)
{
    const value=req.body;
    console.log("id :",value.id);
    console.log("name :",value.name);
    console.log("author : ",value.author);
});

router.get('/add/:id/:name/:author',function(req,res,next)
{
   const  id=req.params;
   console.log(id);
    res.render('sample',{id:id});
});





module.exports=router;