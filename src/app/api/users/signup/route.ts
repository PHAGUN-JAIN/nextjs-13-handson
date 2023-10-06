import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request:NextRequest){
    try {
            const reqBody = await request.json()
            const {username, email, password} = reqBody

            console.log("backend part of request");
            console.log(reqBody);

            const user = await User.findOne({email});

            if(user){
                console.log("user already exist");
                return NextResponse.json({error: "User already exists!"}, {status:400});
            }

            const salt = await bcryptjs.genSalt(10);
            const hashedpass = await bcryptjs.hash(password, salt);
            console.log("hashed password " + hashedpass);

            const newUser = new User({
                username:username,
                email:email,
                password: hashedpass
            });

           const savedUser =  await newUser.save();
           console.log("saved user" + savedUser);

           return NextResponse.json({
            message:"User created Successfully",
            success: true,
           })


    } catch (error: any) {
        console.log("server side error" + error);
        return NextResponse.json({error: error.message}, {status:500})
    }
}