'use strict';

const db = require('../config/db');

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE id = ?;';
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        //백틱(`)에 변수로 만든이유: 에러내용이 문자로 나타나게하기 위함.
        else resolve(data[0]); //mysql에서 넘어온것이 배열로되어있어서 필요한 [0]번지만.
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users(id, name, psword) VALUES(?,?,?);';
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        //저장하는 것이기 때문에 따로 data를 밭을 것이 없어서 data를 안씀.
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
