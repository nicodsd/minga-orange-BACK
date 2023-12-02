import {Schema, Types, model} from "mongoose";

let schema = new Schema({
    name:{ type:String, required: true },
    category_id:{ type:String, required: true },
    title:{ type:String, required: true },
    cover_photo:{ type:String, required: true },
    user_id: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    manga_id: {
        type: Types.ObjectId,
        ref: "mangas",
        required: true
    }
},{
    timestamps: true
})
let collection = "reactions" 

let Reactions = model(collection, schema)
export default Reactions