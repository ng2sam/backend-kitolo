import { Provider } from '.'

let provider

beforeEach(async () => {
  provider = await Provider.create({ shopName: 'test', contact: 'test', email: 'test', tel: 'test', adress: 'test', npa: 'test', city: 'test', promotions: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = provider.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(provider.id)
    expect(view.shopName).toBe(provider.shopName)
    expect(view.contact).toBe(provider.contact)
    expect(view.email).toBe(provider.email)
    expect(view.tel).toBe(provider.tel)
    expect(view.adress).toBe(provider.adress)
    expect(view.npa).toBe(provider.npa)
    expect(view.city).toBe(provider.city)
    expect(view.promotions).toBe(provider.promotions)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = provider.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(provider.id)
    expect(view.shopName).toBe(provider.shopName)
    expect(view.contact).toBe(provider.contact)
    expect(view.email).toBe(provider.email)
    expect(view.tel).toBe(provider.tel)
    expect(view.adress).toBe(provider.adress)
    expect(view.npa).toBe(provider.npa)
    expect(view.city).toBe(provider.city)
    expect(view.promotions).toBe(provider.promotions)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
