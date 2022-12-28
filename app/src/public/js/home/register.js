'use strict';

const id = document.querySelector('#id'),
  name = document.querySelector('#name'),
  psword = document.querySelector('#psword'),
  confirmPsword = document.querySelector('#confirm-psword'),
  registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {
  if (!id.value) return alert('아이디를 입력해주세요');
  if (psword.value !== confirmPsword.value)
    return alert('비밀번호가 일치하지 않습니다.');

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };

  fetch('/register', {
    // 백엔드에 API(routes/home/index.js의 post/process.register)가 먼저 만들어진 상태에서 프론트가 개발되는 것이 좋다.
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  }) //여기까지는 브라우저가 서버에 로그인 데이터를 넘겨주는 과정이고
    .then((res) => res.json()) //여기는 서버가 반응해서 응답해준 데이터를 받아서 json으로 변환하는 과정
    .then((res) => {
      if (res.success) {
        location.href = '/login'; // 성공하면 login 페이지로 이동
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('회원가입 중 에러 발생'));
    });
}
