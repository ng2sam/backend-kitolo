import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Promotion } from '.'

export const create = ({ users, category, bodymen: { body } }, res, next) =>
  Promotion.create(body, users, category)
    .then((promotion) => promotion.view(true))
    .then(success(res, 201))
    .catch(next)

 /* export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Promotion.find(query, select, cursor)
    .then((promotions) => promotions.map((promotion) => promotion.view()))
    .then(success(res))
    .catch(next) */
export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Promotion.find(query, select, cursor)
    .populate('user')
    .populate('category')
    .then((promotions) => promotions.map((promotion) => promotion.view()))
    .then(success(res))
    .catch(next)
export const show = ({ params }, res, next) =>
  Promotion.findById(params.id)
    .populate('user')
    .populate('category')
    .then(notFound(res))
    .then((promotion) => promotion ? promotion.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Promotion.findById(params.id)
    .populate('user')
    .populate('category')
    .then(notFound(res))
    .then((promotion) => promotion ? _.merge(promotion, body).save() : null)
    .then((promotion) => promotion ? promotion.view(true) : null)
    .then(success(res))
    .catch(next)
/*
export const show = ({ params }, res, next) =>
  Promotion.findById(params.id)
    .then(notFound(res))
    .then((promotion) => promotion ? promotion.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Promotion.findById(params.id)
    .then(notFound(res))
    .then((promotion) => promotion ? _.merge(promotion, body).save() : null)
    .then((promotion) => promotion ? promotion.view(true) : null)
    .then(success(res))
    .catch(next)
 */
export const destroy = ({ params }, res, next) =>
  Promotion.findById(params.id)
    .then(notFound(res))
    .then((promotion) => promotion ? promotion.remove() : null)
    .then(success(res, 204))
    .catch(next)
