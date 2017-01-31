import mongoose, { Schema } from 'mongoose'

const propositionSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
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

propositionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      user: this.user.view(full),
      name: this.name,
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

const model = mongoose.model('Proposition', propositionSchema)

export const schema = model.schema
export default model
