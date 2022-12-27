'use strict';

const id = document.querySelector('#id'),
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  //서버에 req 전달, 미리 서버에 post로 '/login' 경로가 마련되어 있어야 아래 코드가 동작한다.
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  });
}
