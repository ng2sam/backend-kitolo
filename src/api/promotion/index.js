import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Promotion, { schema } from './model'

const router = new Router()
// const { productName, category, releaseDate, endDate, description, basePrice, users, discount, minNbContributor, img } = schema.tree
const { productName, releaseDate, endDate, description, category, basePrice, discount, minNbContributor, img } = schema.tree

/**
 * @api {post} /promotions Create promotion
 * @apiName CreatePromotion
 * @apiGroup Promotion
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam productName Promotion's productName.
 * @apiParam category Promotion's category.
 * @apiParam releaseDate Promotion's releaseDate.
 * @apiParam endDate Promotion's endDate.
 * @apiParam description Promotion's description.
 * @apiParam basePrice Promotion's basePrice.
 * @apiParam users Promotion's users.
 * @apiParam discount Promotion's discount.
 * @apiParam minNbContributor Promotion's minNbContributor.
 * @apiParam img Promotion's img.
 * @apiSuccess {Object} promotion Promotion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promotion not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ productName, releaseDate, endDate, description, basePrice, discount, minNbContributor, img }),
  create)

/**
 * @api {get} /promotions Retrieve promotions
 * @apiName RetrievePromotions
 * @apiGroup Promotion
 * @apiUse listParams
 * @apiSuccess {Object[]} promotions List of promotions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /promotions/:id Retrieve promotion
 * @apiName RetrievePromotion
 * @apiGroup Promotion
 * @apiSuccess {Object} promotion Promotion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promotion not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /promotions/:id Update promotion
 * @apiName UpdatePromotion
 * @apiGroup Promotion
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam productName Promotion's productName.
 * @apiParam category Promotion's category.
 * @apiParam releaseDate Promotion's releaseDate.
 * @apiParam endDate Promotion's endDate.
 * @apiParam description Promotion's description.
 * @apiParam basePrice Promotion's basePrice.
 * @apiParam users Promotion's users.
 * @apiParam discount Promotion's discount.
 * @apiParam minNbContributor Promotion's minNbContributor.
 * @apiParam img Promotion's img.
 * @apiSuccess {Object} promotion Promotion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Promotion not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ productName, releaseDate, endDate, category, description, basePrice, discount, minNbContributor, img }),
  update)

/**
 * @api {delete} /promotions/:id Delete promotion
 * @apiName DeletePromotion
 * @apiGroup Promotion
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Promotion not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
