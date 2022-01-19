// import users from '../db/scores.js';
import query from "../db/index.js";

//__________//__________//__________//__________//__________

//get all users
export async function getAllUsers() {
   let getUsers = await query("SELECT * FROM users ORDER BY userid;"); //id??
   return getUsers.rows;
}

//get user by id
export async function getUserById(id) {
   let getUser = await query("SELECT * FROM users WHERE googleuuid = $1;", [
      id,
   ]);
   return getUser.rows;
}

//create a new user
export async function addUser(user) {
   const {
      googleuuid,
      email,
      googledisplayname,
      displayname,
      bootcamperid,
      cohort,
   } = user;

   let newUser = await query(
      `INSERT INTO users (googleuuid, email, googledisplayname, displayname, bootcamperid, cohort) VALUES ($1, $2, $3, $4, $5, $6) RETURNING googleuuid, email, googledisplayname, displayname, bootcamperid, cohort`,
      [googleuuid, email, googledisplayname, displayname, bootcamperid, cohort]
   );

   console.log(newUser.rows);
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
      "UPDATE users SET email=$1, googledisplayname=$2, displayname=$3, bootcamperid=$4, cohort=$5, googleuuid=$6 WHERE googleuuid=$7 RETURNING  googleuuid, email, googledisplayname, displayname, bootcamperid, cohort",
      [
         email,
         googledisplayname,
         displayname,
         bootcamperid,
         cohort,
         googleuuid,
         id,
      ]
   );
   return userToBeUpdated.rows;
}

//delete user
export async function deleteUser(id) {
   let userToBeDeleted = await query(
      "DELETE FROM users WHERE googleuuid = $1 RETURNING googleuuid = $1",
      [id]
   );
   return userToBeDeleted.rows;
}
