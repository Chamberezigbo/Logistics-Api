require("dotenv").config();

require("./src/db/db");
const express = require("express");
const app = express();
const port = process.env.PORT;

const getRouter = require("./src/Routers/getRoutes");
const postRouter = require("./src/Routers/postRoutes");

app.use(express.json());
app.use(getRouter);
app.use(postRouter);

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
