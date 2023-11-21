import mongoose from "mongoose";
let c=false;
export async function connectMongoose(a :any){
    if(!c){
        await mongoose.connect(a);
    }
    c=true;
}
