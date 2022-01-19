import query from "../index.js";

async function createForms() {
  let res = await query(`CREATE TABLE IF NOT EXISTS forms (
    key SERIAL PRIMARY KEY,
    formid INT,
    formtitle TEXT,
    date TEXT,
    userID TEXT,
    isCompleted BOOL,
    synopsis TEXT,
    url TEXT
        );`);
  console.log("Created forms table: ", res);
}

createForms();
