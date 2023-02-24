const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"please enter product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false,

        }
    },
    {
        timestamps: true

    }
)

const product = mongoose.model('product', productSchema);

model.exports = product;