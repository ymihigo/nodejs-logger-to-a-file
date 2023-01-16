const { successLogger, errorLogger } = require("./logger");

const login = (username, password) => {
  if (username === "username" && password === "password") {
    successLogger.info(`${username} has loged in`);
  } else {
    errorLogger.error(`${username} has tried to login`);
  }
};

login("username", "password");
