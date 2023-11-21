import mongoose from "mongoose";
let c=false;
export async function connectMongoose(a :string){
    if(!c){
        await mongoose.connect(a);
    }
    c=true;
}
