'use strict';

const fs = require('fs').promises;

class UserStorage {
  //메소드를 은닉화 했음 (아래의 getUserInfo와는 이름만 비슷하지 다른 메소드임)
  static #getUserInfo(data, id) {
    const users = JSON.parse(data); //data는 16진 버퍼데이터 이므로 읽을 수 있는 JSON으로 파싱한다.
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); //=> [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users; //isAll == true이면 모든 값 리턴
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile('./src/databases/users.json')
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error());
  }

  static getUserInfo(id) {
    return fs
      .readFile('./src/databases/users.json')
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  /* 
  fs.writeFile('./src/databases/users.json',data); 라고 그냥 써버리면 현재 data로 기존의 데이터를 덮어 써버린다.
  그래서 기존의 데이터를 읽어와서 현재의 data를 추가로 붙인 후에 그 data를 써야한다.
  */

  static async save(userInfo) {
    const users = await this.getUsers(true); //true의미 : 키값을 모두 가져오려고..
    if (users.id.includes(userInfo.id)) {
      throw '이미 존재하는 아이디입니다.';
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile('./src/databases/users.json', JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
