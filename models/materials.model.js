import mongoose, { Schema } from "mongoose";

const MaterialsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    technology: {
        type: String,
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    },
    pricePerGram: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },

}, {timestamps: true})

export const Material = mongoose.model("Materials", MaterialsSchema)