import { Promotion } from '.'

let promotion

beforeEach(async () => {
  promotion = await Promotion.create({ productName: 'test', category: 'test', releaseDate: 'test', endDate: 'test', description: 'test', basePrice: 'test', users: 'test', discount: 'test', minNbContributor: 'test', img: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = promotion.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(promotion.id)
    expect(view.productName).toBe(promotion.productName)
    expect(view.category).toBe(promotion.category)
    expect(view.releaseDate).toBe(promotion.releaseDate)
    expect(view.endDate).toBe(promotion.endDate)
    expect(view.description).toBe(promotion.description)
    expect(view.basePrice).toBe(promotion.basePrice)
    expect(view.users).toBe(promotion.users)
    expect(view.discount).toBe(promotion.discount)
    expect(view.minNbContributor).toBe(promotion.minNbContributor)
    expect(view.img).toBe(promotion.img)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = promotion.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(promotion.id)
    expect(view.productName).toBe(promotion.productName)
    expect(view.category).toBe(promotion.category)
    expect(view.releaseDate).toBe(promotion.releaseDate)
    expect(view.endDate).toBe(promotion.endDate)
    expect(view.description).toBe(promotion.description)
    expect(view.basePrice).toBe(promotion.basePrice)
    expect(view.users).toBe(promotion.users)
    expect(view.discount).toBe(promotion.discount)
    expect(view.minNbContributor).toBe(promotion.minNbContributor)
    expect(view.img).toBe(promotion.img)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
