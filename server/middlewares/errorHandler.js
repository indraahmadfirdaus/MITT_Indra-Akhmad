const errorHandler = (err, req, res, next) => {
  let status;
  let message;
  if (err.name === "SequelizeValidationError") {
    status = 400;
    message = err.errors[0].message;
  } else {
    message = err.message || "Internal Server Error";
    status = err.status || 500;
  }
  res.status(status).json({ message });
};

module.exports = errorHandler;
