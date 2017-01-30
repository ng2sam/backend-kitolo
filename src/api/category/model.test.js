import { Category } from '.'

let category

beforeEach(async () => {
  category = await Category.create({ title: 'test', description: 'test', img: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = category.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(category.id)
    expect(view.title).toBe(category.title)
    expect(view.description).toBe(category.description)
    expect(view.img).toBe(category.img)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = category.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(category.id)
    expect(view.title).toBe(category.title)
    expect(view.description).toBe(category.description)
    expect(view.img).toBe(category.img)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
