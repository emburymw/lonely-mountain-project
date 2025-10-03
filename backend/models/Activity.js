const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({

    StravActivityID: {
        type: String,
        required: true,
        unique: true
    },

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    activityType: {
        type: String,
        required: true
    },
    
    distance: {
        type: Number,
        required: true
    },

    cumulativeDistance: {
        type: Number,
        required: true
    },

    lastCheckpointReached: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checkpoint',
        default: null
    },

    updateDescription: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;

