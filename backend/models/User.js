const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    stravaID: {
        type: String, 
        required: true, 
        unique: true
    },

    accessToken: String,
    refreshToken: String,
    tokenExpiry: Date,

    cumulativeDistance: {
        type: Number,
        default: 0
    },

    lastCheckpointReached: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checkpoint',
        default: null
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    
    updatedAt: {
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;