import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cart = new Schema({
    name: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: "product"
    },
    subscription:{
        type: Schema.Types.ObjectId,
        ref: "subscription"
    },
    office: {
        type: Schema.Types.ObjectId,
        ref: "office",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    override:{
        type: Number
    }
});

export default mongoose.models.Cart || mongoose.model('Cart', cart)
