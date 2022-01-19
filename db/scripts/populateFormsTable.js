import query from "../index.js";
import forms from "../sample-forms.js";

async function populateFormsTable() {
    for (let i = 0; i < forms.length; i++) {
      const formid = forms[i].formid;
      const formtitle = forms[i].formtitle;
      const date = forms[i].date;
      const userID = forms[i].userID;
      const isCompleted = forms[i].isCompleted;
      const synopsis = forms[i].synopsis;
      const url = forms[i].url;
  
      const res = await query(
        `INSERT INTO forms (formid, formtitle, date, userID, isCompleted, synopsis, url) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
        [formid, formtitle, date, userID, isCompleted, synopsis, url]
      );
      console.log(res);
    }
  }
  populateFormsTable();