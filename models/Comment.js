import { Schema, Types, model } from "mongoose"

let schema = Schema({
    user_id: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    chapter_id: {
        type: Types.ObjectId,
        ref: "chapters",
        required: true
    },
    comment: { type: String, required: true },
    photo: { type: String, required: true },
    email: { type: String, required: true },

},
    {
        timestamps: true
    })

let collection = "comments"

let Comment = model(collection, schema)

export default Comment