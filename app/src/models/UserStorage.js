'use strict';

class UserStorage {
  // 클래스 필드 (변수명에 #을 붙여서 은닉화 시킨다.)
  static #users = {
    id: ['aaa', 'bbb', 'ccc'],
    psword: ['1234', '5678', '4567'],
    name: ['아롱이', '다롱이', '새롱이'],
  };

  //게터 메소드 (은닉화 시킨 변수를 다른 파일에서 불러오기 위한 메소드)
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); //=> [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);
    users.name.push(userInfo.name);
    return { success: true };
  }
}

module.exports = UserStorage;
