import jwt from 'jsonwebtoken'

// jwt.sign() method to create token
// First argument = is the payload,
// Second argument = is the secret from .env
// Thrid argument = is the options, which is expiration date
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  // save it in a cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookie in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  })
}

export default generateToken
