// import users from '../db/scores.js';
import { compile } from "morgan";
import query from "../db/index.js";

//get all forms
export async function getAllForms() {
   let getForms = await query("SELECT * FROM forms ORDER BY formid;");
   return getForms.rows;
}

//get all forms by  user id
export async function getFormsByUserId(id) {
   let getForms = await query(
      "SELECT * FROM forms WHERE googleuuid = $1 ORDER BY date;",
      [id]
   ); //ORDER BY DATE, ORDER BY COMPLETED - WHERE DO wE SORT???

   return getForms.rows;
}

//create a new form entry
export async function addCompletedForm(form) {
   let completedForm = await query(
      "INSERT INTO forms (formid, formtitle, date, userID, isCompleted, synopsis, url,googleuuid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);",
      [
         form.formid,
         form.formtitle,
         form.date,
         form.userID,
         form.isCompleted,
         form.synopsis,
         form.url,
         form.googleuuid,
      ]
   );
   return completedForm.rows;
}

//   UniqueID SERIAL KEY	formid	formtitle	date	userID(from users table)	isCompleted	 synopsis	url

//mark form as completed
export async function markFormAsCompleted(userid, formid, form) {
   console.log(userid);
   let completedForm = await query(
      " UPDATE forms SET isCompleted = true WHERE googleuuid=$1 AND formid=$2;",

      [userid, formid]
   );

   //  console.log(formid);

   //  if (form.iscompleted) {
   //     const state = form.iscompleted;
   //     let completedForm = await query(
   //        //  " UPDATE users SET isCompleted = true WHERE googleuuid = $1 && formid = $2;",
   //        `UPDATE forms SET SET isCompleted=true WHERE formid=$2 && userid=$3 RETURNING iscompleted`,

   //        [state, formid, userid]
   //     );
   //   return completedForm;
   //  }
}
