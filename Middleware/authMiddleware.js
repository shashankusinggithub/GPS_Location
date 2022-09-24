import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import DB  from '../db.config'

const protect = asyncHandler(async (req, res, next) => {

  let token

  if (
    req.headers.authorization
  ) {

    try {
      // Get token from header      
      token = req.headers.authorization

      // Verify token
      const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY)
      const [result] = await DB.query(`SELECT * FROM users 
      where email = ?`[decoded.email]
      )
      // Get user from the token
      req.email = result
      console.log(req.email)
      next()

    } catch (error) {
      console.log(error)
      res.status(500)
      throw new Error('Internal Server Error')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }