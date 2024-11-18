// app.js
const express = require('express');
require('dotenv').config();
const os = require('os');

const app = express();

const userInfo = os.userInfo();
console.log(userInfo);
const port = process.env.PORT || 3000;

app.get('/api/userinfo', (req, res) => {
 
  const userInfo = os.userInfo();
  const platform = os.platform();
  const homedir = os.homedir();
  const uptime = os.uptime();

  const systemInfo = {
    username: userInfo.username,
    uid: userInfo.uid,
    platform: platform,
    homedir: homedir,
    uptime: uptime,
  };

  res.json(systemInfo);  
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



