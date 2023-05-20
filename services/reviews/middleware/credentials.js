const credentials = (req, res, next) => {
  const origin = req.headers.origin
  if (origin === 'http://localhost:3000') {
    res.header('Access-Control-Allow-Credentials', true)
  }
  next()
}

export default credentials
