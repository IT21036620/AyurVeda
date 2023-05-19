import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const verifyJWT = (req, res, next) => {
  //get the header from the request
  const authenticationHeader =
    req.headers.authorization || req.headers.Authorization

  //check the authorization header validity
  if (!authenticationHeader?.startsWith('Bearer ')) return res.sendStatus(401)

  //get the access token from the request
  const token = authenticationHeader.split(' ')[1]

  //verify the access token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //invalid token
    if (err) return res.sendStatus(403)

    //token validation successs
    req.user = decoded.UserInfo.username
    req.role = decoded.UserInfo.role

    next()
  })
}

export default verifyJWT
