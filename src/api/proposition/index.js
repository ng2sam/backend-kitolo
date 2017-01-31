import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Proposition, { schema } from './model'

const router = new Router()
const { name, description, img } = schema.tree

/**
 * @api {post} /propositions Create proposition
 * @apiName CreateProposition
 * @apiGroup Proposition
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Proposition's name.
 * @apiParam description Proposition's description.
 * @apiParam img Proposition's img.
 * @apiSuccess {Object} proposition Proposition's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Proposition not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ name, description, img }),
  create)

/**
 * @api {get} /propositions Retrieve propositions
 * @apiName RetrievePropositions
 * @apiGroup Proposition
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} propositions List of propositions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /propositions/:id Retrieve proposition
 * @apiName RetrieveProposition
 * @apiGroup Proposition
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} proposition Proposition's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Proposition not found.
 * @apiError 401 admin access only.
 */
router.get('/:id',
  token({ required: true, roles: ['admin'] }),
  show)

/**
 * @api {put} /propositions/:id Update proposition
 * @apiName UpdateProposition
 * @apiGroup Proposition
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam name Proposition's name.
 * @apiParam description Proposition's description.
 * @apiParam img Proposition's img.
 * @apiSuccess {Object} proposition Proposition's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Proposition not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ name, description, img }),
  update)

/**
 * @api {delete} /propositions/:id Delete proposition
 * @apiName DeleteProposition
 * @apiGroup Proposition
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Proposition not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
