const express = require("express")

const router = express()

const adminCtrls = require("../../controllers/admins/admins")

const authAdmin = require("../../middlewares/authAdmin")

const { adminUpload } = require("../../utils/upload")

router.get('/me', authAdmin, adminCtrls.getMe)
router.put('/update-profile', authAdmin, adminCtrls.updateProfile)

router.put('/update-avatar', authAdmin, adminUpload.single('avatar'), adminCtrls.updateAvatar)

router.post('/notifications', adminCtrls.createNotification)
router.get('/notifications', authAdmin, adminCtrls.getNotifications)
router.put('/notifications/:notificationId/mark', adminCtrls.markNotification)

// router.get('/notifications/:notificationId', adminCtrls.getNotification)

router.get('/finance', adminCtrls.finance)
router.put('/change-admin-role', adminCtrls.changeAdminRole)
router.get('/', adminCtrls.getAdmins)
router.get('/:adminId', adminCtrls.getAdmin)
router.delete('/:adminId', adminCtrls.deleteAdmin)

module.exports = router