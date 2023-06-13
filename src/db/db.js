const mongoose = require("mongoose");

const url = process.env.URL;
mongoose
	.connect(url, { useNewUrlParser: true })
	.then(() => {
		console.log("connected to database");
	})
	.catch((err) => {
		console.error("Error connecting to database:", err);
	});
