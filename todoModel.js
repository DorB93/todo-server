const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	text: {
		type: String,
		required: [true, "Please provide the todo text!"],
	},
	doDay: {
		type: String,
		required: [true, "Please provide the do date!"],
	},
	createAt: {
		type: String,
		default: new Date().toLocaleDateString().toString(),
	},
	reminder: {
		type: Boolean,
		default: false,
	},
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
