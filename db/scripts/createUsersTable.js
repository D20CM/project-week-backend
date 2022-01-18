import query from "../index.js";

async function createUsers() {
  let res = await query(`CREATE TABLE IF NOT EXISTS users (
        userid SERIAL PRIMARY KEY,
        googleuuid TEXT,
        email TEXT,
        googledisplayname TEXT,
        displayname TEXT,
        bootcamperid TEXT,
        cohort TEXT
        )`);
  console.log("Created users table: ", res);
}

createUsers();
