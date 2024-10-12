import mongoose from 'mongoose';

const LeaderSchema = new mongoose.Schema({
    leaderEmail: {
        type: String,
        unique: true
    },
    leaderFacebook: String,
    leaderName: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now 
    },
    leaderSquad: [
        {
           type: mongoose.Schema.Types.ObjectId,
            ref: 'Student' 
        }
    ],
    ancestor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Leader'
    },
    descedants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Leader'
        }
    ],
    salary: Number,
    fine: Number,
    cards: [
        {
            color: String
        }
    ]

});

export default LeaderSchema;