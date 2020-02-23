  require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const profileRoutes = require("./apis/routes/profile");
const loginRoutes = require("./apis/routes/login");

//<<PORT>>
const PORT = process.env.PORT || 5000;
//<<Db details>>
const dbName = "test";
const collectionName = "devices";

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.listen(PORT, () => console.log(`Server Listening on ${PORT}`));
app.use("/profile", profileRoutes);
app.use("/login", loginRoutes);

console.log("EE::s1:2:---------------");