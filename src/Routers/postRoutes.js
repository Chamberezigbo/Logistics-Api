const express = require("express");
const Package = require("../db/packageSchema");

const router = express.Router();

router.post("/packages", async (request, response) => {
	const { packageName, currentLocation } = request.body;

	const NewPackage = new Package({
		packageName,
		currentLocation,
	});
	try {
		await NewPackage.save();
		response
			.status(200)
			.json({ message: "Successfully saved new package" });
	} catch (error) {
		response.status(500).json({ error: `Failed to save due to ${error}` });
	}
});

module.exports = router;
