const Todo = require("./todoModel");

async function getAllTodos(req, res) {
	try {
		const todos = await Todo.find();
		if (!todos) {
			throw new Error("No data found!!");
		}
		res.status(200).json([...todos]);
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: { err },
		});
	}
}

async function updateTodo(req, res) {
	try {
		const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!todo) {
			throw new Error("No todo found with that ID");
		}
		res.status(200).json({
			...todo,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: { err },
		});
	}
}

async function deleteTodo(req, res) {
	try {
		const todo = await Todo.findByIdAndDelete(req.params.id);
		if (!todo) {
			throw new Error("No document found with that ID");
		}
		res.status(204).json({ status: "success" });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: { err },
		});
	}
}

async function createTodo(req, res) {
	try {
		const todo = await Todo.create(req.body);
		res.status(201).json({
			...todo,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: { err },
		});
	}
}

module.exports = {
	getAllTodos,
	updateTodo,
	deleteTodo,
	createTodo,
};
