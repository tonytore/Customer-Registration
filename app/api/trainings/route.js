import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title,slug,content,isActive,imageUrl,description,categoryId} = await request.json();
        //const newTraining = {title,slug,imageUrl,description,categoryId,content,isActive}
               // check if the customer already exists in the db
     const isTraining = await db.training.findUnique({
        where:{
          slug,
        }
      })
      
      if(isTraining){
          return NextResponse.json({
              data:null,
              message:"Training Already Exist"
          },{status:409})
      }
        
        const newTraining = await db.training.create({
            data:{
                title,
                slug,
                imageUrl,
                description,
                isActive,
                content,
                categoryId,
                
            },
        })

        console.log(newTraining);
        return NextResponse.json(newTraining)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create training",
                error,
            },{status:500}
        )
    }
}
export async function GET(request){
    try {
        const training= await db.training.findMany({
            orderBy:{
                createdAt : "desc"
            },
         
        })
       
        return NextResponse.json(training)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"training failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }