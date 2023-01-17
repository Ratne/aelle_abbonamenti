import mongoose from "mongoose";
const Schema = mongoose.Schema;

const office = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        required: true
    },

});

export default mongoose.models.Office || mongoose.model('Office', office)
