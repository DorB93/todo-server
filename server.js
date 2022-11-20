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

app.get("/todos", routehandler.getAllTodos);
app.get("/todos/:id", routehandler.getTodo);
app.post("/todos", routehandler.createTodo);
app.put("/todos/:id", routehandler.updateTodo);
app.delete("/todos/:id", routehandler.deleteTodo);

app.listen(2500, () => {
	console.log(`Server running on: 127.0.0.1:2500...`);
});
