import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  token = req.cookies.jwt // Getting the token from the cookie

  if (token) {
    try {
      // Verifying the token and Getting the userId from the payload
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // Find the User by Id and attaching the user to the request object
      req.user = await User.findById(decoded.userId).select('-password')
      // next() to move on the next middleware function
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export { protect }
