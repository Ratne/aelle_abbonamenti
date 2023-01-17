import mongoose from "mongoose";
const Schema = mongoose.Schema;

const product = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    sku: {
        type: String,
        required: false
    },
    idInfusionsoft: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        default: false,
        required: true
    },
    shippable: {
        type: Boolean,
        required: true
    }


});

export default mongoose.models.Product || mongoose.model('Product', product)
