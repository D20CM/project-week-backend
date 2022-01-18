import express from "express";
const router = express.Router();
import { getAllUsers } from "../models/users.js";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

export default router;

router.get("/users", async function (req, res) {
  if (req.query.name) {
    console.log(req.query.name);
    let searchedName = req.query.name;
    // console.log("You are looking for " + searchedName);
    const foundUser = await getUserByName(searchedName);
    res.json(foundUser);
  } else {
    const users = await getAllUsers();
    res.json(users);
  }
});
