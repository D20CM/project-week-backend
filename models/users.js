// import users from '../db/scores.js';
import query from "../db/index.js";

export async function getAllUsers() {
  console.log("get request");
  let getUsers = await query("SELECT * FROM users  ORDER BY id;");
  return getUsers.rows;
}
