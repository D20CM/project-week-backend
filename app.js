import express from "express";
import path from "path";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
<<<<<<< HEAD
=======
import Login from "./routes/login.js";
>>>>>>> f777cb9ce9d2a83fa5fbb260249f40caee5d2bd4

import usersRouter from "./routes/users.js";

const app = express();

<<<<<<< HEAD
=======
// console.log(process.env);

>>>>>>> f777cb9ce9d2a83fa5fbb260249f40caee5d2bd4
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

<<<<<<< HEAD
app.use("/users", usersRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
=======
// app.use('/users', usersRouter);
app.use("/login", Login);

app.use(function (req, res, next) {
   res.status(404).json({
      message: "We couldn't find what you were looking for 😞",
   });
});

app.use(function (err, req, res, next) {
   console.error(err.stack);
   res.status(500).json(err);
>>>>>>> f777cb9ce9d2a83fa5fbb260249f40caee5d2bd4
});

export default app;
