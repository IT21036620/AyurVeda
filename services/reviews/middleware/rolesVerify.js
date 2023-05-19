const rolesVerify = (allowedRole) => {
  return (req, res, next) => {
    //check if role is passed from the request
    if (!req?.role) return res.sendStatus(401)

    //passed role is analyzed for accessibility
    const result = req.role === allowedRole

    //access is restricted
    if (!result) return res.sendStatus(401)

    //access granted
    next()
  }
}

export default rolesVerify
