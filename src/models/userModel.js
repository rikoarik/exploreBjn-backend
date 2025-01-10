const users = [];

module.exports = {
  addUser: (user) => {
    users.push(user);
    return user;
  },
  findUserByEmail: (email) => users.find((user) => user.email === email),
};
