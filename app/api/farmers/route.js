import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
      // extract the credentials

    //     const {
    //         id,
    //         name,
    //         phone,
    //         email,
    //         physicalAddress,
    //         contactPerson,
    //         contactPersonPhone,
    //         terms,
    //         notes,
    //         isActive,
    //         imageUrl,
    //         code,
    //         landSize,
    //         mainCrop,
    //         products,
    //         userId,

    // } = await request.json();
    // const newFarmer = {
    //     fullname,
    //     phone,
    //     email,
    //     physicalAddress,
    //     contactPerson,
    //     contactPersonPhone,
    //     terms,
    //     notes,
    //     isActive
    //}
const farmerData = await request.json()   

const newFarmer = await db.farmer.create({
            data:{
                // id,
                name:farmerData.name,
                phone:farmerData.phone,
                email:farmerData.email,
                physicalAddress:farmerData.physicalAddress,
                contactPerson:farmerData.contactPerson,
                contactPersonPhone:farmerData.contactPersonPhone,
                terms:farmerData.terms,
                notes:farmerData.notes,
                isActive:farmerData.isActive,
                imageUrl:farmerData.imageUrl,
                code:farmerData.code,
                landSize: parseInt(farmerData.landSize),
                mainCrop:farmerData.mainCrop,
                products:farmerData.products,
                userId:farmerData.userId,
            },
        })
    console.log(newFarmer);
    return NextResponse.json(newFarmer)

       
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create farmer",
                error,
            },{status:500}
        )
    }
 }


export async function GET(request){
try {
    const farmers= await db.farmer.findMany({
        orderBy:{
            createdAt : "desc"
        }
    })
   
    return NextResponse.json(farmers)
} catch (error) {
    console.log(error)
    return NextResponse.json(
        {
            message:"Farmer failed",
            error,
        },
        {
            status:500
        }
    )
}
}

