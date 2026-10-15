import express from 'express'
import projectCtrl from '../controllers/projects.controller.js'

const router = express.Router()

router.route('/api/projects').get(projectCtrl.list)
router.param('id', projectCtrl.projectByID)
router.route('/api/projects/:id').get(projectCtrl.read)
router.route('/api/projects').post(projectCtrl.create)
router.route('/api/projects/:id').put(projectCtrl.update)
router.route('/api/projects/:id').delete(projectCtrl.remove)
router.route('/api/projects').delete(projectCtrl.removeAll)
export default router