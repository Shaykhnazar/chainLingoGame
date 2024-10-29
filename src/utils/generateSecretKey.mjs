// generateSecretKey.mjs
import { randomBytes } from 'crypto'

const generateSecretKey = () => {
  return randomBytes(32).toString('hex') // Generates a 256-bit key
}

console.log('Generated Secret Key:', generateSecretKey())
