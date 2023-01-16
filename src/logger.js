// const winston = require("winston");

const { format, createLogger, transports, config } = require("winston");
const { combine, timestamp, json } = format;
const logger = createLogger({
  transports: [new transports.Console()],
});

const successLogger = createLogger({
  levels: config.syslog.levels,
  defaultMeta: { component: "user-service" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "../logs/user_login.log" }),
  ],
});

const errorLogger = createLogger({
  levels: config.syslog.levels,
  defaultMeta: { component: "user-service" },
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "../logs/userlogin_error.log" }),
  ],
});
module.exports = {
  logger,
  successLogger,
  errorLogger,
};
