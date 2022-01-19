import express from "express";
// import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../models/users.js";
import app from "../app.js";

const usersRouter = express.Router();
usersRouter.use(express.json());

// usersRouter.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });

usersRouter.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

usersRouter.get("/", async function (req, res) {
  console.log("hereitis");
  if (req.query.id) {
    console.log(req.query.id);
    let id = req.query.id;
    const foundUser = await getUserById(id);
    res.json(foundUser);
  } else {
    console.log("here?");
    const users = await getAllUsers();
    res.json(users);
  }
});

usersRouter.post("/", async function (req, res) {
  let newUser = req.body;
  const addedUser = await addUser(newUser);
  res.json(addedUser);
});

usersRouter.put("/:id", async function (req, res) {
  let id = req.params.id;
  let newData = req.body;
  const updatedUser = await updateUser(id, newData);
  res.json(updatedUser);
});

usersRouter.delete("/:id", async function (req, res) {
  let id = req.params.id;
  const deletedUser = await deleteUser(id);
  res.json(deletedUser);
});

export default usersRouter;
