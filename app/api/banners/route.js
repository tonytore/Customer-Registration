import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title,imageUrl,link,isActive} = await request.json();

    

        // const newBanner = {title,imageUrl,link,isActive}
        const newBanner = await db.banner.create({
            data:{
                title,
                imageUrl,
                link,
                isActive,
            },
        })
         console.log(newBanner);
        return NextResponse.json(newBanner)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create banner",
                error,
            },{status:500}
        )
    }
}

export async function GET(request){
    try {
        const banner = await db.banner.findMany({
            orderBy:{
                createdAt : "desc"
            }
        })
       
        return NextResponse.json(banner)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"banner failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }