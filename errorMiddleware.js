function notFound(req, res, next) {
  res.status(404);
  next(new Error('Not Found: ' + req.originalUrl));
}

function errorHandler(err, req, res, next) {
  const code = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(code).json({ message: err.message });
}

module.exports = { notFound, errorHandler };