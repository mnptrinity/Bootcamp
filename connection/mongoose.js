
var mongoose=require("mongoose");
require('dotenv').config();


//establishing the mongoose connection...
mongoose.connect(process.env.mongoURI,
{useUnifiedTopology: true,useNewUrlParser: true });

mongoose.connection.on("connected", () => {
	console.info("MongoDB connected Successfully!!");
});

mongoose.connection.on("error", err  => {
	console.error(`Error in mongoose connection: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.info("Mongoose connection is disconnected");
  });
  process.on("SIGINT", function() {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });


