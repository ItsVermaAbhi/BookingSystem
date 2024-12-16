const mn = require('mongoose')
require('dotenv').config();


mn.connect(process.env.MONGO_URL)

const packageScema = mn.Schema({
    owner: {
      type: mn.Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    },
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },
      availableDates: {
        type: [Date], 
        required: true,
      },
      image: {
        type: String, 
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      }
})

const bookingInformationSchema = mn.Schema({
    packageId: {
        type: mn.Schema.Types.ObjectId, 
        ref: 'Package',
        required: true,
      },
      customerName: {
        type: mn.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      email: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      numberOfTravelers: {
        type: Number,
        required: true,
        min: [1, 'Number of travelers must be at least 1'],
      },
      specialRequests: {
        type: String,
        trim: true,
        default: '',
      },
      totalPrice: {
        type: Number,
        required: true,
      },
      bookingDate: {
        type: Date,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

const userSchema = mn.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minLength: 6
  }
})

const adminSchema = mn.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minLength: 6
  }
})


const Package = mn.model('Package', packageScema)
const BookingInformation = mn.model('Booking', bookingInformationSchema)
const user = mn.model('User', userSchema)
const admin = mn.model('Admin', adminSchema)

module.exports = {Package, BookingInformation}