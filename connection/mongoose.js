const mongoose=require('mongoose');

require('dotenv').config();


mongoose.connect(process.env.mongoURI, {
	useNewUrlParser:  true,
	useUnifiedTopology:  true
});

mongoose.connection.on("connected", () => {
	console.info("MongoDB connected Successfully!!");
});
mongoose.connection.on("error", err  => {
	console.error(`Error in mongoose connection: ${err.message}`);
});
mongoose.connection.on("disconnected", () => {
console.info("Mongoose connection is disconnected");
});