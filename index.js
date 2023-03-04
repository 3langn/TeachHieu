// express init with mongoose
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/index.js');

const port = 3000;

// mongoose connection
mongoose.connect('mongodb://localhost:27018/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected');
});

// body parser
app.use(bodyParser.json());

// routes
const productRoute = require('./routes/product.route.js');

// request -> middleware -> route -> response

const authMiddleware = (req, res, next) => {
  req.headers.authorization = 'Bearer 123';

  const token = req.headers.authorization.split(' ')[1];

  // check token

  // if token is valid -> find user by token

  // token = {user_id: 123, exp: 123123123}

  // const user = await User.findById(token.user_id);

  // req.user = user;
  next();
};

app.use(middleware);
app.use(router);

// error handler middleware
app.use((err, req, res, next) => {
  console.error('error handler');

  console.error(err.stack);
  res.status(500).send({
    message: 'Something broke!',
    stack: err.stack,
    error: err.message,
  });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send({
    message: 'Not found',
  });
});

// listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
