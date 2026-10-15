import express from 'express'
import educationCtrl from '../controllers/educations.controller.js'

const router = express.Router()

router.route('/api/educations').get(educationCtrl.list)
router.param('id', educationCtrl.educationByID)
router.route('/api/educations/:id').get(educationCtrl.read)
router.route('/api/educations').post(educationCtrl.create)
router.route('/api/educations/:id').put(educationCtrl.update)
router.route('/api/educations/:id').delete(educationCtrl.remove)
router.route('/api/educations').delete(educationCtrl.removeAll)
export default router