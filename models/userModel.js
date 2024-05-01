import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN', 'COSTUMER'],
    default: 'COSTUMER'
  }
})

export default mongoose.model('User', userSchema)
