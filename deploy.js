const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
require("dotenv").config();

const config = {
  user: process.env.user,
  password: process.env.password,
  host: "praxis-kreativkai.de",
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/praxis-kreativkai.de/",
  include: ["*", "**/*", ".htaccess"], // this uploads everything except dot files
  deleteRemote: true, // delete existing files at destination before uploading
};

// use with promises
ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished"))
  .catch((err) => console.log(err));
