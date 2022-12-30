'use strict';

const UserStorage = require('./UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  // 아래 코드는 const {id,psword} 부분에서 undefined가 나올 경우 자꾸 에러가 나서 주석처리
  // async login() {
  //   const client = this.body;
  //   const { id, psword } = await UserStorage.getUserInfo(client.id);

  //   try {
  //     if (id) {
  //       if (id === client.id && psword === client.psword) {
  //         return { success: true };
  //       }
  //       return { success: false, msg: '비밀번호가 틀렸습니다.' };
  //     }
  //     return { success: false, msg: '존재하지 않는 아이디입니다.' };
  //   } catch (err) {
  //     return { success: false, msg: err };
  //   }
  // }

  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);

      if (user) {
        if (user.id === client.id && user.psword === client.psword) {
          return { success: true };
        }
        return { success: false, msg: '비밀번호가 틀렸습니다.' };
      }
      return { success: false, msg: '존재하지 않는 아이디입니다.' };
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client); //회원가입에서 넘어온 body를 UserStorage에 저장시킬 메소드 실행
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
