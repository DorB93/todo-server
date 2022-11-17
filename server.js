const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routehandler = require("./routeHandler");
const app = express();

// add global midlleare
app.use(cors());
app.use(express.json());

// coonecting to MongoDB
mongoose.connect("mongodb://localhost:27017/Todo_App_server").then(() => {
	console.log("MongoDB connected successfuly!");
});

app.get("/", routehandler.getAllTodos);
app.post("/", routehandler.createTodo);
app.put("/:id", routehandler.updateTodo);
app.delete("/:id", routehandler.deleteTodo);

app.listen(2500, () => {
	console.log(`Server running on: 127.0.0.1:2500...`);
});
