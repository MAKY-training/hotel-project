import mongoose from "mongoose";
const hotelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    rooms: {
        type: Number,
        required: true
    },

    bathrooms: {
        type: Number,
        required: true
    },

    parking: {
        type: Number,
        required: true
    },

    pet: {
        type: Number,
        required: true
    },

    pricePerNight: {
        type: Number,
        required: true
    },

    images: [String],
},
    { timestamps: true });
export default mongoose.model("Hotel", hotelSchema);