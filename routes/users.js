import express from "express";
// import { Router } from "express";
import {
   getAllUsers,
   getUserById,
   addUser,
   updateUser,
   deleteUser,
   patchUser,
} from "../models/users.js";
import app from "../app.js";

const usersRouter = express.Router();
usersRouter.use(express.json());

//__________//__________//__________//__________//__________
usersRouter.get("/:id", async function (req, res) {
   let id = req.params.id;
   const user = await getUserById(id);
   res.json(user);
});

usersRouter.get("/", async function (req, res) {
   const user = await getAllUsers();
   res.json(user);
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

usersRouter.patch("/:id", async function (req, res) {
   let newData = req.body;
   let id = req.params.id;
   const deletedUser = await patchUser(newData, id);
   res.json(deletedUser);
});

export default usersRouter;
