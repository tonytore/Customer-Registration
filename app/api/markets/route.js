import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title,slug,imageUrl,description,isActive} = await request.json();

               // check if the customer already exists in the db
     const isMarket = await db.market.findUnique({
        where:{
          slug,
        }
      })
      
      if(isMarket){
          return NextResponse.json({
              data:null,
              message:"Market Already Exist"
          },{status:409})
      }

       // const newMarket = {title,slug,imageUrl,description,isActive}
        const newMarket = await db.market.create({
            data:{
                title,
                slug,
                imageUrl,
                description,
                isActive
            },
        })
        console.log(newMarket);
        return NextResponse.json(newMarket)

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create markets",
                error,
            },{status:500}
        )
    }
}

export async function GET(request){
    try {
        const markets= await db.market.findMany({
            orderBy:{
                createdAt : "desc"
            }
        })
       
        return NextResponse.json(markets)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"markets failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }