const { stack } = require('../routes/people.router');

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}
function errHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}
module.exports = { logErrors, errHandler, boomErrorHandler };