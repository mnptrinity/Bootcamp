const express=require('express');
const router=express.Router();
const controller=require('../database/controller/index');
const {User} = require('../database/schema/index');





router.get('/',function(req,res)
{
    res.render("profile");
});



//in here the insetion of the new user in happening ....
router.post('/adduser',function(req,res){
   const user= User(req.body);
   user.save()
   .then(response=>{
       console.log("Successfully inserted into the DB");
   })
   .catch(err=>{
       console.log("Error in the insertion..."+err);
   });
   res.status(200).send("The data is successfully stored in the DB.!");
});



// it is for the virtual method for joining the first name and the last name...
router.get('/read/:id',controller.readUser);
//it for checking the single user DOB...
router.get('/dob/:id',controller.finddob);
//this is the example for the static one...
router.get('/find',controller.findall);







module.exports=router;






