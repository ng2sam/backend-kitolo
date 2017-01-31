import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Provider, { schema } from './model'

const router = new Router()
const { shopName, contact, email, tel, adress, npa, city, promotions } = schema.tree

/**
 * @api {post} /providers Create provider
 * @apiName CreateProvider
 * @apiGroup Provider
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam shopName Provider's shopName.
 * @apiParam contact Provider's contact.
 * @apiParam email Provider's email.
 * @apiParam tel Provider's tel.
 * @apiParam adress Provider's adress.
 * @apiParam npa Provider's npa.
 * @apiParam city Provider's city.
 * @apiParam promotions Provider's promotions.
 * @apiSuccess {Object} provider Provider's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Provider not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ shopName, contact, email, tel, adress, npa, city, promotions }),
  create)

/**
 * @api {get} /providers Retrieve providers
 * @apiName RetrieveProviders
 * @apiGroup Provider
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} providers List of providers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /providers/:id Retrieve provider
 * @apiName RetrieveProvider
 * @apiGroup Provider
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} provider Provider's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Provider not found.
 * @apiError 401 admin access only.
 */
router.get('/:id',
  token({ required: true, roles: ['admin'] }),
  show)

/**
 * @api {put} /providers/:id Update provider
 * @apiName UpdateProvider
 * @apiGroup Provider
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam shopName Provider's shopName.
 * @apiParam contact Provider's contact.
 * @apiParam email Provider's email.
 * @apiParam tel Provider's tel.
 * @apiParam adress Provider's adress.
 * @apiParam npa Provider's npa.
 * @apiParam city Provider's city.
 * @apiParam promotions Provider's promotions.
 * @apiSuccess {Object} provider Provider's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Provider not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ shopName, contact, email, tel, adress, npa, city, promotions }),
  update)

/**
 * @api {delete} /providers/:id Delete provider
 * @apiName DeleteProvider
 * @apiGroup Provider
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Provider not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
