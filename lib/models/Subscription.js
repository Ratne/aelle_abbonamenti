import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subscription = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product',
            require: false,
        }
    ],
    price: {
        type: Number,
        required: true
    },
    billingEvery: {
        type: Number,
        required: true
    },
    billingTime:{
      type: String,
      required: true
    },
    billingCycles: {
        type: Number,
        required: true
    },
    firstPrice: {
        type: Number,
        required: true
    },
    recurringSubscription: {
        type: [ {
            products: [
                {
                type: [Schema.Types.ObjectId],
                required: true,
                ref: "product"
            }
            ],
        }]

    }


});

export default mongoose.models.Subscription || mongoose.model('Subscription', subscription)
