const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const activityRoutes = require('./routes/activities');

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lonely-mountain');

app.use('/api/auth', authRoutes); 
app.use('/api/activities', activityRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
})