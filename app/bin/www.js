'use strict';

// π μ΄ λΆλΆμ΄ μλ²λ₯Ό μ€νμν€λ λΆλΆμ΄λ€. μ¦ μ΄ νμΌμ μ€ν μμΌμΌ μλ²κ° κ°λλλ€.
// μ€ν node ./bin/www.js

// listen νλ λΆλΆμ λͺ¨λν
const app = require('../app'); // μλ κ²½λ‘λ₯Ό μ§μ ν΄μ€μΌ νλ€. μ¦ (..)μμ ν΄λλ‘ κ°μ app.jsλ₯Ό λΆλ¬μ¨λ€.

const logger = require('../src/config/logger');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`${PORT} ν¬νΈμμ μλ²κ° κ°λλμμ΅λλ€.`);
});
