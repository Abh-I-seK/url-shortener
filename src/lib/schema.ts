import mongoose from "mongoose";
const UrlSchema=new mongoose.Schema({
    url:String,
    shortUrl:String,
    nos:Number
})

const variableSchema=new mongoose.Schema({
    val:Number
})
export const Variable=mongoose.models.Variable || mongoose.model('Variable',variableSchema);

export const Url=mongoose.models.Url || mongoose.model('Url',UrlSchema);