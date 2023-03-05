import {Router} from 'express'
import * as authCtrl from '../controllers/auth.controller.js'
import {checkDuplicateUsernameOrEmail,checkRolesExisted} from '../middlewares/index.js'

const router = Router()

router.post('/signin',authCtrl.signIn)

router.post('/signup',[checkDuplicateUsernameOrEmail,checkRolesExisted], authCtrl.signUp)

export default router