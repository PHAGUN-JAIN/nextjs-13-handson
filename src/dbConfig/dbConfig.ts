import mongoose from "mongoose";

export async function connect(){
    try {
        
        mongoose.connect(process.env.MONGO_URI!);
        const con = mongoose.connection;
    
        con.on('connected', ()=>{
            console.log("connection successfull!!!");
        })
        
        con.on('error', (err)=>{
            console.log("MongoDb connection error"+err);
            process.exit();
        })

    } catch (error) {
        console.log("Something went wrong!!");
        console.error(error);
    }
}