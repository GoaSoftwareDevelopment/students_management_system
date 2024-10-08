const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    speed: Number,
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    },
    createdAt: {
        type: Date,
        default: Date.now  
    },
    updatedAt: {
        type: Date,
        default: Date.now  
    },
    currentDate: Date,
    level: Number,
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            unique: true,
            ref: 'Student'
        }
    ]
});

export default GroupSchema;