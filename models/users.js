// import users from '../db/scores.js';
import query from "../db/index.js";

//get all users
export async function getAllUsers() {
  console.log("get request");
  let getUsers = await query("SELECT * FROM users ORDER BY id;"); //id???
  return getUsers.rows;
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
export async function updateScore(userName, newData){

    let userToBeUpdated = await query("UPDATE users SET  ;",[what will we update???]);
    return userToBeUpdated.rows;

}

//delete user 
//delete player
// export function deletePlayer(playerName){
//     let playerToBeDeleted = players.find(function(player){
//         return player.name === playerName;
//     });

//     let index = players.findIndex(function(player){
//         return player.name === playerName;
//     });

//     players.splice(index,1);
//     console.log(players);
//     return playerToBeDeleted;
    
// }
