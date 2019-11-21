const express=require('express');
const router=express.Router();
const {Book}=require('../database/user');



router.get('/',function(req,res,next){
    Book.find(function(error,user) {
        if(error)
        {
            res.status(500).json({message:'There is a connection error'});
        }
        else{
            res.status(200).send(user);
        }
    });
})

router.get('/search',function(req,res,next){
    res.status(200).json({id: 1, name: "Harry Potter", author: "J.K. Rowling"});
});

router.post('/add',function(req,res,next)
{
    const newbook=new Book(req.body);
    newbook.save(function(error,user){
        if(error)
        {
            res.status(500).json({message:"data not saved...."});
        }
        else
        {
      res.status(200).json({message:"data  saved successfully...."});

        }
    });

    
});

router.get('/add',function(req,res,next)
{
    res.render('sample');
});





module.exports=router;