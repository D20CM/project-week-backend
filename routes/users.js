import express from "express";
const router = express.Router();
import { deleteUser, getAllUsers, updateUser } from "../models/users.js";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

export default router;

router.get("/users", async function (req, res) {
  if (req.query.id) {
    console.log(req.query.id);
    let id = req.query.id;
    const foundUser = await getUserById(id);
    res.json(foundUser);
  } else {
    const users = await getAllUsers();
    res.json(users);
  }
});

router.post("/users", async function (req, res) {
  let newUser = req.body;
  const addedUser = await addUser(newUser);
  res.json(addedUser);
});

router.put("/users/:id", async function (req, res) {
  //id???
  let id = req.params.id; ///Number???-------------------------------
  let newData = req.body;
  const updatedUser = await updateUser(id, newData);
  res.json(updatedUser);
});

router.delete("/users/:id", async function (req, res) {
  let id = req.params.id; ///Number???---------------------------------
  const deletedUser = await deleteUser(id);
  res.json(deletedUser);
});
