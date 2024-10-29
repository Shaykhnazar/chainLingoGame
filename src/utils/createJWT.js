import jwt from 'jsonwebtoken'

// Generate Access Token (short-lived)
export const createAccessToken = payload => {
  const secretKey = import.meta.env.VITE_JWT_SECRET

  if (!secretKey) {
    throw new Error('JWT Secret key is not defined in environment variables')
  }

  try {
    const token = jwt.sign(payload, secretKey, {
      expiresIn: '1h', // Access token expires in 1 hour
    })
    return token
  } catch (error) {
    console.error('JWT Creation Error:', error.message)
    return null
  }
}

// Generate Refresh Token (long-lived)
export const createRefreshToken = payload => {
  const secretKey = import.meta.env.VITE_JWT_SECRET

  if (!secretKey) {
    throw new Error('JWT Secret key is not defined in environment variables')
  }

  try {
    const token = jwt.sign(payload, secretKey, {
      expiresIn: '7d', // Refresh token expires in 7 days
    })
    return token
  } catch (error) {
    console.error('JWT Creation Error:', error.message)
    return null
  }
}
