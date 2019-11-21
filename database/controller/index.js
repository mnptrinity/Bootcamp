const { User } = require("../schema/index");
const HttpStatus = require("http-status-codes");


//it is the virtual function for joining the first name and the last name of the user...
module.exports.readUser = (req, res) => {
	User.findById(req.params.id)
	.then(response=>{

	res.status(200).send("The full name of the user is..."+response.fullName);

	})
	.catch(err=>{
	   res.status(200).send("Error in the selection of the user...");
	});
};



//this is for the instance method for the find the specific persons birthday based on their date of birth...
module.exports.finddob=function(req,res){
	User.findById(req.params.id)
	.then(response =>{
		// console.log("obj:",response.getIfbirth());
		res.status(200).send(response.getIfbirth())
	})
	.catch(err=>{
		// console.log("Error in the selection of the user...");
				res.status(200).send("Error in the selection of the user...");
	});
};




//this is for the static  method for the finding the all persons who are havind the birthday today
module.exports.findall=function(req,res){
	User.findByDob("21.11.2019",(err, data) => {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Age Mismatch" });
    res.status(HttpStatus.OK).json(data);
  });
};



