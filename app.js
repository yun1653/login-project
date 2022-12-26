<<<<<<< HEAD
'use strict';

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./routes/home/index');

// 앱셋팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home);

module.exports = app; // app를 내보내줘야 다른 모듈에서 이것을 받을 수 있다.
=======
'use strict';

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./routes/home/index');

// 앱셋팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home);

module.exports = app; // app를 내보내줘야 다른 모듈에서 이것을 받을 수 있다.
>>>>>>> loginP
