import express from 'express';
import contactCtrl from '../controllers/contacts.controller.js';

const router = express.Router();
router.route('/api/contacts').get(contactCtrl.list);
router.param('id', contactCtrl.contactByID);
router.route('/api/contacts/:id').get(contactCtrl.read);
router.route('/api/contacts').post(contactCtrl.create);
router.route('/api/contacts/:id').put(contactCtrl.update);
router.route('/api/contacts/:id').delete(contactCtrl.remove);
router.route('/api/contacts').delete(contactCtrl.removeAll);
export default router;