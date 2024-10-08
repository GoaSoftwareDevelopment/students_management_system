const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    admin_username: {
        type: String,
        unique: true
    },
    admin_password: String,
    admin_email: {
        type: String,
        unique: true
    },
    admin_facebook: String
});

export default adminSchema;