import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/', registerUser)
// router.route('/auth').post(authUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router