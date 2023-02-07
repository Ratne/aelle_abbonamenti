import mongoose from "mongoose";
const Schema = mongoose.Schema;
// TODO: controllare bene lo status ordine / abbonamento

const billingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    privateOrBusiness:{
        type: Boolean
    },
    fiscalCode:{
        type: String,
    },
    businessName:{
        type: String
    },
    country:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    addressNumber:{
        type: String,
        required: true
    },
    cap: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    vat: {
        type: String
    },
    sdiNumber:{
        type: String
    }
});
const shippingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    addressNumber:{
        type: String,
        required: true
    },
    cap: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});


const order = new Schema({
    checkoutId: {
        type: Schema.Types.ObjectId,
        ref: "office",
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        required: true
    },
    statusSubscription: {
        type: String
    },
    billing: {
        type: billingSchema,
    },
    shipping:{
        type: shippingSchema,
    },
    products:{
        type: [Schema.Types.ObjectId],
        ref: "Product"
    },
    subscription:{
        type: Schema.Types.ObjectId,
        ref: "Subscription",
    },
    date: {
        type: String,
        required: true

    },
    note: {
        type: [String]
    },
    gateway:{
        type: String,
        required: true
    },
    extra:{
        type: [
            {
                type: Object
            }
        ],

    }

});

export default mongoose.models.Order || mongoose.model('Order', order)
