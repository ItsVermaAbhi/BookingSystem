const mn = require('mongoose')
require('dotenv').config();


mn.connect(process.env.MONGO_URL)

const packageScema = mn.Schema({
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
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Package',
        required: true,
      },
      customerName: {
        type: String,
        required: true,
        trim: true,
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

const Package = mn.model('Package', packageScema)
const BookingInformation = mn.model('Booking', bookingInformationSchema)

module.exports = {Package, BookingInformation}