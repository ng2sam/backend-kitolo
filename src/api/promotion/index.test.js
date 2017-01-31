import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Promotion } from '.'

const app = () => express(routes)

let userSession, adminSession, promotion

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  promotion = await Promotion.create({})
})

test('POST /promotions 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: adminSession, productName: 'test', category: 'test', releaseDate: 'test', endDate: 'test', description: 'test', basePrice: 'test', users: 'test', discount: 'test', minNbContributor: 'test', img: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.productName).toEqual('test')
  expect(body.category).toEqual('test')
  expect(body.releaseDate).toEqual('test')
  expect(body.endDate).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.basePrice).toEqual('test')
  expect(body.users).toEqual('test')
  expect(body.discount).toEqual('test')
  expect(body.minNbContributor).toEqual('test')
  expect(body.img).toEqual('test')
})

test('POST /promotions 401 (user)', async () => {
  const { status } = await request(app())
    .post('/')
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /promotions 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /promotions 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /promotions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${promotion.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(promotion.id)
})

test('GET /promotions/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /promotions/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`/${promotion.id}`)
    .send({ access_token: adminSession, productName: 'test', category: 'test', releaseDate: 'test', endDate: 'test', description: 'test', basePrice: 'test', users: 'test', discount: 'test', minNbContributor: 'test', img: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(promotion.id)
  expect(body.productName).toEqual('test')
  expect(body.category).toEqual('test')
  expect(body.releaseDate).toEqual('test')
  expect(body.endDate).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.basePrice).toEqual('test')
  expect(body.users).toEqual('test')
  expect(body.discount).toEqual('test')
  expect(body.minNbContributor).toEqual('test')
  expect(body.img).toEqual('test')
})

test('PUT /promotions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`/${promotion.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /promotions/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${promotion.id}`)
  expect(status).toBe(401)
})

test('PUT /promotions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: adminSession, productName: 'test', category: 'test', releaseDate: 'test', endDate: 'test', description: 'test', basePrice: 'test', users: 'test', discount: 'test', minNbContributor: 'test', img: 'test' })
  expect(status).toBe(404)
})

test('DELETE /promotions/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`/${promotion.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /promotions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${promotion.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /promotions/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${promotion.id}`)
  expect(status).toBe(401)
})

test('DELETE /promotions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
