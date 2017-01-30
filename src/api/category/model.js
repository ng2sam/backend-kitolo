import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  img: {
    type: String
  }
}, {
  timestamps: true
})

categorySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      description: this.description,
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

const model = mongoose.model('Category', categorySchema)

export const schema = model.schema
export default model
