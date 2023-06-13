const express = require("express");
const router = express.Router();

//? Get all  users routers //
router.get("/packages", (request, response) => {
	response.send("this send all packages from database");
});

//? get one product with id //
router.get("/packages/:id", (request, response) => {
	response.send(`this get one product ${request.params.id} from database`);
});

module.exports = router;
