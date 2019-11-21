const { userSchema } = require("../schema/index");



//it is used for the virtual creation that is binding of the properties of the single user...
userSchema.virtual("fullName").get(function() {
	return this.firstname + "  " + this.lastname;
});


// static method for finding the all the users having the birthday today...
userSchema.statics.findByDob = function(Users, callback) {
  this.find({}, function (err,user) {
						function single(user){
							let ts = Date.now();
							var old=user.dob.getDate();
							var old_month=user.dob.getMonth();

							let date_ob = new Date(ts);
							let date = date_ob.getDate();
							let month=date_ob.getMonth();
						if(old==date&&old_month==month)
								return ("Today is  his/her Birthday"+user);
								else
									null;
						}
							 user.forEach(single);
 						 });
	this.find({},callback);

};


// it is an instance method it is for the single person who is having the birthday today...
userSchema.methods.getIfbirth   =  function()  {
	let ts = Date.now();
  var old=this.dob.getDate();
  var old_month=this.dob.getMonth();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month=date_ob.getMonth();
if(old==date&&old_month==month)
	return  "Today is  his/her Birthday";
	else
	return "Today is Not his/her Birthday";
};







