const mongoose = require('mongoose');

const ReservationSchema = new mongoose.schema ({
    guestName: {
        type: String,
        required: true,
        trim: true,
    },
    reservationTime: {
        type: Date,
        required: true,
    },
    partySize: {
        type: Number,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
        trim: true,
    }
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

export default Reservation;