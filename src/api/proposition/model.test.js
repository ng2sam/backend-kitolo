import { Proposition } from '.'
import { User } from '../user'

let user, proposition

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  proposition = await Proposition.create({ user, name: 'test', description: 'test', img: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = proposition.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(proposition.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.name).toBe(proposition.name)
    expect(view.description).toBe(proposition.description)
    expect(view.img).toBe(proposition.img)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = proposition.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(proposition.id)
    expect(typeof view.user).toBe('object')
    expect(view.user.id).toBe(user.id)
    expect(view.name).toBe(proposition.name)
    expect(view.description).toBe(proposition.description)
    expect(view.img).toBe(proposition.img)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
