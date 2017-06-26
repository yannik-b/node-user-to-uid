const userToUid = require('../app');

userToUid('root')
  .then((uid) => {
    console.log(uid);
  })
  .catch((err) => {
    console.error(err);
  });
