import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Proposition } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Proposition.create({ ...body, user })
    .then((proposition) => proposition.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Proposition.find(query, select, cursor)
    .populate('user')
    .then((propositions) => propositions.map((proposition) => proposition.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Proposition.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then((proposition) => proposition ? proposition.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Proposition.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then((proposition) => proposition ? _.merge(proposition, body).save() : null)
    .then((proposition) => proposition ? proposition.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Proposition.findById(params.id)
    .then(notFound(res))
    .then((proposition) => proposition ? proposition.remove() : null)
    .then(success(res, 204))
    .catch(next)
