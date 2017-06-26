'use strict';

const fs = require('fs');
const process = require('process');

module.exports = (username) => {
  return new Promise((resolve, reject) => {
    if (process.platform === 'win32') {
      return reject('This module doesn\'t work on Windows systems');
    }
    else {
      fs.readFile('/etc/passwd', (err, data) => {
        let passwd = data.toString().split('\n');

        passwd.forEach((user) => {
          let userArray = user.split(/:/g);
          if (userArray[0] == username) {
            return resolve(userArray[2]);
          }
        });

        return reject('username not found');
      });
    }
  });
};
