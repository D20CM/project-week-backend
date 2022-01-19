import express from "express";

import {
  getAllForms,
  getFormsByUserId,
  addCompletedForm,
  markFormAsCompleted,
} from "../models/forms.js";
import app from "../app.js";

const formsRouter = express.Router();
formsRouter.use(express.json());

formsRouter.get("/", async function (req, res) {
  if (req.query.id) {
    console.log(req.query.id);
    let id = req.query.id;
    const foundForms = await getFormsByUserId(id);
    res.json(foundForms);
  } else {
    const forms = await getAllForms();
    res.json(forms);
  }
});

//need another route to get form by ID???

//mark form as completed
formsRouter.put("/:formid/:userid", async function (req, res) {
  let formid = req.query.formid;
  let userid = req.query.userid;
  const updatedForm = await markFormAsCompleted(userid, formid);
  res.json(updatedForm);
});

//add a newly completed form
formsRouter.post("/", async function (req, res) {
  const form = req.body;
  const newForm = await addCompletedForm(form);
});
