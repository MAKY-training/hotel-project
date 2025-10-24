import Hotel from "../models/hotel.model.js";
export const createHotels = async (req, res) => {
    // res.send("Create Hotel route");    
    try {
        const { name, location, city, rooms, bathrooms, parking, pet, pricePerNight } = req.body;

        if (!name || !location || !city || !rooms || !bathrooms || !parking || !pet || !pricePerNight) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newHotel = new Hotel(req.body);
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.status(500).json({ message: "Failed to create hotel", error: error.message });
    }
};

export const getHotels = async (req, res) => {
    
    try {
        const allHotels = await Hotel.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: allHotels });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch hotels", error: error.message });
    }
};

export const getLastHotels = async (req, res) => {
    
    try {
        const lastHotels = await Hotel.find().sort({ createdAt: -1 }).limit(3);
        res.status(200).json({ success: true, data: lastHotels });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch latest hotels" , error: error.message});
    }
};


