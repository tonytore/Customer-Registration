import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title,slug,imageUrl,description,isActive} = await request.json();
        //const newCategory = {title,slug,imageUrl,description,isActive}

        // check if the customer already exists in the db
     const isCategory = await db.category.findUnique({
  where:{
    slug,
  }
})

if(isCategory){
    return NextResponse.json({
        data:null,
        message:"Category Already Exist"
    },{status:409})
}

        const newCategory = await db.category.create({
            data:{
                title,
                slug,
                description,
                isActive,
                imageUrl,
                
            },
        })

        console.log(newCategory);
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create category",
                error,
            },{status:500}
        )
    }
}

export async function GET(request){
    try {
        const category = await db.category.findMany({
            orderBy:{
                createdAt : "desc"
            },
            include:{
                products:true,
            }
        })
       
        return NextResponse.json(category)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"category failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }