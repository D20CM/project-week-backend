import express from "express";
import { Router } from "express";

const router = Router();

router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

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

export default router;
