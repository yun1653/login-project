'use strict';

const id = document.querySelector('#id'),
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('#button');

loginBtn.addEventListener('click', login);

function login() {
  if (!id.value) return alert('아이디를 입력해주세요');
  if (!psword.value) return alert('비밀번호를 입력해 주세요.');

  const req = {
    id: id.value,
    psword: psword.value,
  };

  //서버에 req 전달, 미리 서버에 post로 '/login' 경로가 마련되어 있어야 아래 코드가 동작한다.
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  }) //여기까지는 브라우저가 서버에 로그인 데이터를 넘겨주는 과정이고
    .then((res) => res.json()) //여기는 서버가 반응해서 응답해준 데이터를 받아서 json으로 변환하는 과정
    .then((res) => {
      if (res.success) {
        location.href = '/'; //root 경로로 이동 : 로그인 성공하면 이동
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('로그인 중 에러 발생'));
    });
}
