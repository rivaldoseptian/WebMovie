const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User, Movie, Genre, Cast } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        role: "Admin",
        phoneNumber,
        address,
      });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "Email/Password Required" };
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) throw { name: "Invalid Email/Password" };
      const isPassword = comparePassword(password, user.password);
      if (!isPassword) throw { name: "Invalid Email/Password" };
      const payload = {
        id: user.id,
      };
      const access_token = signToken(payload);
      res.status(200).json({ access_token: access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
