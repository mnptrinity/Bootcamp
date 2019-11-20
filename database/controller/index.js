const { User } = require("../schema/index");


//it is the virtual function for joining the first name and the last name of the user...
module.exports.readUser = (req, res) => {
	User.findById(req.params.id)
	.then(response=>{
		console.log("Odject : "+response);
		console.log(response.fullName);
	})
	.catch(err=>{
		console.log("Error in the insertion..."+err);
	});
	res.send('hello');
};





//this is for the instance method for the find the specific persons birthday based on their date of birth...
module.exports.finddob=function(req,res){
	User.findById(req.params.id)
	.then(response =>{
		console.log("obj:",response.getIfbirth());
	})
	.catch(err=>{
		console.log("Error in the selection of the user..."+err);
	});
};



//this is for the static  method for the finding the all persons who are havind the birthday today
module.exports.findall=function(req,res){
	User.find()
	.then(response =>{
		console.log("Result :",response.getIfbirth1());
	})
	.catch(err=>{
		console.log("Error in the selection of the user..."+err);
	});
};



