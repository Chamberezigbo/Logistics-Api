const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
	packageName: {
		required: true,
		type: String,
	},
	currentLocation: {
		required: true,
		type: String,
	},
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
