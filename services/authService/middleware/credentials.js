const credentials = (req, res, next) => {
  const origin = req.headers.origin
  if (origin === 'http://localhost:3006') {
    res.header('Access-Control-Allow-Credentials', true)
  }
  next()
}

module.exports = credentials
