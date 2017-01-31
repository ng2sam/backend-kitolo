import mongoose, { Schema } from 'mongoose'

const providerSchema = new Schema({
  shopName: {
    type: String
  },
  contact: {
    type: String
  },
  email: {
    type: String
  },
  tel: {
    type: String
  },
  adress: {
    type: String
  },
  npa: {
    type: String
  },
  city: {
    type: String
  },
  promotions: {
    type: String
  }
}, {
  timestamps: true
})

providerSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      shopName: this.shopName,
      contact: this.contact,
      email: this.email,
      tel: this.tel,
      adress: this.adress,
      npa: this.npa,
      city: this.city,
      promotions: this.promotions,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Provider', providerSchema)

export const schema = model.schema
export default model
