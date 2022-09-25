import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import DB  from '../services/db.config.js'

const auth = asyncHandler(async (req, res, next) => {

  let token
  if (
    req.headers.authorization
    ) {
      
      try {
      console.log(req.headers.authorization)
      // Get token from header      
      token = req.headers.authorization

      // Verify token
      const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY)
      console.log(decoded, token, 'decoded')
      const email = decoded.email

      const [user] = await DB.query(`SELECT * FROM users 
        where email = ?`, [email]
        )
      if (!user[0]){
        throw new Error('Token Not Valid')
      }
      console.log(user)
      
      next()
      // Get user from the token
      // req.email = result

    } catch (error) {
      console.log(error.message, 'token error')
      res.status(500).send({jwt:error.message})
      throw new Error('Internal Server TokenError', error.message)
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export default  auth 