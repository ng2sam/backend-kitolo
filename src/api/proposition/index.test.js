import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Proposition } from '.'

const app = () => express(routes)

let userSession, adminSession, proposition

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  proposition = await Proposition.create({ user })
})

test('POST /propositions 201 (user)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: userSession, name: 'test', description: 'test', img: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.img).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('POST /propositions 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /propositions 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /propositions 401 (user)', async () => {
  const { status } = await request(app())
    .get('/')
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /propositions 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /propositions/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`/${proposition.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(proposition.id)
})

test('GET /propositions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`/${proposition.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /propositions/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${proposition.id}`)
  expect(status).toBe(401)
})

test('GET /propositions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})

test('PUT /propositions/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`/${proposition.id}`)
    .send({ access_token: adminSession, name: 'test', description: 'test', img: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(proposition.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.img).toEqual('test')
})

test('PUT /propositions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`/${proposition.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /propositions/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${proposition.id}`)
  expect(status).toBe(401)
})

test('PUT /propositions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: adminSession, name: 'test', description: 'test', img: 'test' })
  expect(status).toBe(404)
})

test('DELETE /propositions/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`/${proposition.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /propositions/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${proposition.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /propositions/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${proposition.id}`)
  expect(status).toBe(401)
})

test('DELETE /propositions/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
