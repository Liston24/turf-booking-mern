const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single booking by ID
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new booking
router.post('/', async (req, res) => {
    const booking = new Booking({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        addons: {
            water: req.body.addons?.water || false,
            prime: req.body.addons?.prime || false,
            gatorade: req.body.addons?.gatorade || false
        }
    });

    try {
        const newBooking = await booking.save();
        res.status(201).json({
            message: 'Booking created successfully',
            booking: newBooking
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update booking
router.put('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        if (req.body.name) booking.name = req.body.name;
        if (req.body.date) booking.date = req.body.date;
        if (req.body.time) booking.time = req.body.time;
        if (req.body.status) booking.status = req.body.status;
        if (req.body.addons) {
            booking.addons = {
                water: req.body.addons.water || false,
                prime: req.body.addons.prime || false,
                gatorade: req.body.addons.gatorade || false
            };
        }

        const updatedBooking = await booking.save();
        res.json({
            message: 'Booking updated successfully',
            booking: updatedBooking
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete booking
router.delete('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        await booking.deleteOne();
        res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
