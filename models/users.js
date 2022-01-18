// import users from '../db/scores.js';
import query from "../db/index.js";

//get all users
export async function getAllUsers() {
  let getUsers = await query("SELECT * FROM users ORDER BY id;"); //id??
  return getUsers.rows;
}

//get user by id
export async function getUserById(id) {
  let getUser = await query("SELECT * FROM users WHERE id = $1;", [id]); //id???
  return getUser.rows;
}

//create a new user
export async function addUser(user) {
  let newUser = await query(
    "INSERT INTO users (googleuuid, email, googledisplayname) VALUES ($1, $2, $3);",
    [user.googleuuid, user.email, user.googledisplayname]
  );
  return newUser.rows;
}

//update user ---- what inputs here????
export async function updateUser(somenewdata) {
  let userToBeUpdated = await query("UPDATE users SET  ;", []); ///TBC-----------------------------------------
  return userToBeUpdated.rows;
}

//delete user
export async function deleteUser(id) {
  let userToBeDeleted = await query("DELETE FROM users WHERE id = $1", [id]);
  return userToBeUpdated.rows;
}
