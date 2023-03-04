const userService = require('../services/user.service.js');

const register = async (req, res) => {
  const { username, password } = req.body;
  const user = await userService.register({ username, password });
  res.status(201).json({
    message: 'User created successfully',
    user,
  });
};

module.exports = {
  register,
};
