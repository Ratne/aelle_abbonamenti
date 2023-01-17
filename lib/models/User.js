import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

});

export default mongoose.models.User || mongoose.model('User', user)
