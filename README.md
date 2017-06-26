# node-user-to-uid

NPM module to convert an UNIX-username into an uid

## Install

```shell
npm install user-to-uid
```

## Usage

```javascript
const userToUid = require('user-to-uid');

uidToUser('root')
  .then((uid) => {
    console.log(uid);
  })
  .catch((err) => {
    console.error(err);
  });
```
