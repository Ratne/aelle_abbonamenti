import mongoose from "mongoose";
const Schema = mongoose.Schema;

const checkout = new Schema({
    name: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    productsList: {
        type: [Schema.Types.ObjectId],
        ref: "product"
    },
    subscriptionList:{
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
    priceOvveraid:{
        type: Number
    }
});

export default mongoose.models.Checkout || mongoose.model('Checkout', checkout)
