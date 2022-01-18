import query from "../index.js";
import users from "../sample-users.js";

async function populateScoreboard() {
  for (let i = 0; i < users.length; i++) {
    const googleuuid = users[i].googleuuid;
    const email = users[i].email;
    const googledisplayname = users[i].googledisplayname;

    const res = await query(
      `INSERT INTO users (googleuuid, email, googledisplayname) VALUES ($1, $2, $3)`,
      [googleuuid, email, googledisplayname]
    );
    console.log(res);
  }
}
populateScoreboard();
