const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./models/Todo.js");

const app = express();
app.use(express.json()); //gets the data entered in application inside req.body
app.use(cors());

const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // completeTask,
} = require("./controllers/tasks");

const MONGO_URL =
  "mongodb+srv://divdev:mongodb@cluster0.t5x8j53.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connnected to db"))
  .catch((err) => console.log(err));

app.get("/todos", getTasks);

app.post("/todo/new", createTask);

app.delete("/todo/delete/:id", deleteTask);

// app.get("/todo/complete/:id", completeTask);

app.get("/todo/getTask/:id", getTask);

app.put("/todo/getTask/:id", updateTask);

app.listen(3001, () => console.log("Listening on 3001"));
