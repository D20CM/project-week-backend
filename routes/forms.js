import express from "express";
import app from "../app.js";

import {
   getAllForms,
   getFormsByUserId,
   addCompletedForm,
   markFormAsCompleted,
} from "../models/forms.js";

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
// :userid
formsRouter.patch("/:formid/:userid", async function (req, res) {
   let formid = req.params.formid;
   let userid = req.params.userid;
   const form = req.body;

   const updatedForm = await markFormAsCompleted(userid, formid, form);
   res.json(updatedForm);
});

//add a newly completed form
formsRouter.post("/", async function (req, res) {
   const form = req.body;
   const newForm = await addCompletedForm(form);
   res.send(newForm);
});

//__________//__________//__________//__________//__________

formsRouter.get("/:id", async (req, res, next) => {
   let id = req.params.id;
   const data = await getFormsByUserId(id);
   res.send(data);
});

export default formsRouter;
