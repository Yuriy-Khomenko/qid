## qqid

A small and fast utility to generate unique IDs

If you need to quickly generate UUID, use the standard [randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) function. This is the best and fastest way to do this. If you need to generate a simple ID even faster, use this package.

### Install

npm install --save qqid

### Usage

```javascript
import qid from 'qqid'; // default - qid16

// or import from 'qqid/qid26'; - qid26

const id = qid(); // id - identifier 16 characters long
```

### Features

- very fast generate unique IDs;
- there are no heavy calculations when starting the script;
- two algorithms for generating identifiers 16 (qid16 - faster) and 26 (qid26) characters long;
- library has no dependencies;

The identifier consists:
- qid16: the first eight characters - hash from a part of timestamp, the last eight characters - hash from the result of the Math.random function;
- qid26: the first ten characters - hash from a full of timestamp, the last sixteen characters - hash from the result of the Math.random function;

### License

MIT Yuriy Khomenko