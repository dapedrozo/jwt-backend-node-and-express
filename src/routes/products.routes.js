import {Router} from 'express'
import * as productsCtrl from '../controllers/products.controller.js'
import {verifyToken,isModerator,isAdmin, checkRolesExisted} from '../middlewares/index.js'

const router = Router()

router.get('/', productsCtrl.getProducts)

router.post('/', [verifyToken,isModerator,checkRolesExisted] ,productsCtrl.createProduct)

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId', [verifyToken,isModerator], productsCtrl.updateProductById)

router.delete('/:productId', [verifyToken,isAdmin], productsCtrl.deleteProductById)

export default router