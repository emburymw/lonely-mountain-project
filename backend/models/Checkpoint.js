const mongoose = require('mongoose');

const checkpointSchema = new mongoose.Schema({

    checkpointName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    distance: {
        type: Number,
        required: true
    },

    loreDump: {
        type: String,
        required: true
    },

    order: {
        type: Number
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Checkpoint = mongoose.model('Checkpoint', checkpointSchema);

export default Checkpoint;