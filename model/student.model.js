const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now 
    },
    studentName: String,
    studentAge: Number,
    studentGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group' 
    },
    studentSpeed: Number,
    studentFacebook: String,
    parentName: String,
    parentFacebook: String,
    studentLevel: Number,
    studentRole: String,
    studentStatus: Boolean,
    studentEmail: {
        type: String,
        unique: true
    }, 
    leaderOfStudent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Leader'
    },
    scoreFromLeader: Number,
    scoreFromQuiz: Number,
    scoreFromGithub: [
        {
            date: String,
            score: Number,
            penalty: Number,
            comment: String,
            evidence: String,
        }
    ]
});

export default StudentSchema;