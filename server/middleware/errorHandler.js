module.exports = (error, request, response, next) => {
  let message = "Internal Server Error";
  let status = 500;

  switch (error.name) {
    case "JsonWebTokenError":
    case "Invalid Token":
      status = 401;
      message = "Unauthenticated";
      break;
    case "SequelizeValidationError":
    case "SequelizeUniqueValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "Invalid Email/Password":
      status = 404;
      message = "Invalid Email/Password";
      break;
    case "Email/Password Required":
      status = 400;
      message = "Email/Password Required";
      break;
    default:
      message = "Internal Server Error";
      status = 500;
      break;
  }
  response.status(status).json({ message: message });
};
