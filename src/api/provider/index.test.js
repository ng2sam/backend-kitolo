import request from 'supertest-as-promised'
import { masterKey } from '../../config'
import express from '../../services/express'
import routes, { Provider } from '.'

const app = () => express(routes)

let provider

beforeEach(async () => {
  provider = await Provider.create({})
})

test('POST /providers 201 (master)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: masterKey, shopName: 'test', contact: 'test', email: 'test', tel: 'test', adress: 'test', npa: 'test', city: 'test', promotions: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.shopName).toEqual('test')
  expect(body.contact).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.tel).toEqual('test')
  expect(body.adress).toEqual('test')
  expect(body.npa).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.promotions).toEqual('test')
})

test('POST /providers 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /providers 200 (master)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /providers 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /providers/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`/${provider.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(provider.id)
})

test('GET /providers/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${provider.id}`)
  expect(status).toBe(401)
})

test('GET /providers/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /providers/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`/${provider.id}`)
    .send({ access_token: masterKey, shopName: 'test', contact: 'test', email: 'test', tel: 'test', adress: 'test', npa: 'test', city: 'test', promotions: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(provider.id)
  expect(body.shopName).toEqual('test')
  expect(body.contact).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.tel).toEqual('test')
  expect(body.adress).toEqual('test')
  expect(body.npa).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.promotions).toEqual('test')
})

test('PUT /providers/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${provider.id}`)
  expect(status).toBe(401)
})

test('PUT /providers/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: masterKey, shopName: 'test', contact: 'test', email: 'test', tel: 'test', adress: 'test', npa: 'test', city: 'test', promotions: 'test' })
  expect(status).toBe(404)
})

test('DELETE /providers/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`/${provider.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /providers/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${provider.id}`)
  expect(status).toBe(401)
})

test('DELETE /providers/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
