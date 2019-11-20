const { userSchema } = require("../schema/index");




userSchema.virtual("fullName").get(function() {
	return this.firstname + "  " + this.lastname;
});




userSchema.methods.getIfbirth1   =  function()  {

	entire.forEach((single)=>{
		let ts = Date.now();
		var old=this.single.getDate();
		var old_month=this.single.getMonth();
	  
	  let date_ob = new Date(ts);
	  let date = date_ob.getDate();
	  let month=date_ob.getMonth();
	  if(old==date&&old_month==month)
		  return  "Today is  his/her Birthday";
		  else
		  return "Today is Not his/her Birthday";
	});
	
};



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







