import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isDemoUser: {
        type: Boolean,
        default: true,
        required: true,
    },
    demoTime: {
        type: String,
        enum: ['1 min', '7 days'],
        default: '1 min',
        required: true,
    },
    demoEndDate: {
        type: Date,
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER',
        required: true,
    },
    refreshToken: {
        type: String,
    },
});

const User = mongoose.model('Users', userSchema);
export default User;
