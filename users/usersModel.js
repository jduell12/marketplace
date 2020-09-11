const db = require("../data/db-config");

module.exports = {
  getUsers,
  addUser,
  editUser,
  deleteUser,
  getUserById,
};

//returns an array of users in the database
function getUsers() {
  return db("users");
}

//returns number of records added
async function addUser(user) {
  return db("users").insert(user, "id");
}

//updates the user with the given id and returns the count of records changed
async function editUser(userId, user) {
  return db("users")
    .where({ id: userId })
    .update(user)
    .then((count) => {
      return count;
    });
}

async function deleteUser(user) {
  return null;
}

async function getUserById(user) {}
