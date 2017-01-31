import mongoose, { Schema } from 'mongoose'

const promotionSchema = new Schema({
  productName: {
    type: String
  },
  slug: {
    type: String,
    unique: true
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Category',
    required: true
  },
  releaseDate: {
    type: String
  },
  endDate: {
    type: String
  },
  description: {
    type: String
  },
  basePrice: {
    type: String
  },
  users: [{
    type: Schema.ObjectId,
    ref: 'User',
    required: false
  }],
  discount: {
    type: String
  },
  minNbContributor: {
    type: Number
  },
  img: [{
    type: String
  }]
}, {
  timestamps: true
})

promotionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      productName: this.productName,
      slug: this.slug,
      category: this.category.view(full),
      releaseDate: this.releaseDate,
      endDate: this.endDate,
      description: this.description,
      basePrice: this.basePrice,
      users: this.users,
      discount: this.discount,
      minNbContributor: this.minNbContributor,
      img: this.img,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Promotion', promotionSchema)

export const schema = model.schema
export default model
