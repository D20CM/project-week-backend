// import users from '../db/scores.js';
import query from "../db/index.js";

//get all users
export async function getAllUsers() {
  console.log("in the models");
  let getUsers = await query("SELECT * FROM users ORDER BY userid;"); //id??
  return getUsers.rows;
}

//get user by id
export async function getUserById(id) {
  let getUser = await query("SELECT * FROM users WHERE googleuuid = $1;", [id]);
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
export async function updateUser(id, updatedUser) {
  const {
    googleuuid,
    email,
    googledisplayname,
    displayname,
    bootcamperid,
    cohort,
  } = updatedUser;
  let userToBeUpdated = await query(
    "UPDATE users SET email = $2, googledisplayname = $3, displayname=$4, bootcamperid=$5, cohort=$6 WHERE googleuuid = $1;",
    [id, email, googledisplayname, displayname, bootcamperid, cohort]
  );
  return userToBeUpdated.rows;
}

//delete user
export async function deleteUser(id) {
  let userToBeDeleted = await query("DELETE FROM users WHERE googleuuid = $1", [
    id,
  ]);
  return userToBeDeleted.rows;
}
