import db from '@/app/lib/db'
import {  NextResponse } from "next/server";



// export async function PUT(request,{params}) {
  
//     try {
//         const {id} = params
//         const { fullname,
//             phone,
//             email,
//             physicalAddress,
//             contactPerson,
//             contactPersonPhone,
//             terms,
//             notes,
//             isActive,
//             imageUrl,
//             code,
// } = await request.json()
        
//         const farmers= await db.farmer.findUnique({
//             where:{
//                 id,
//             },
//         });
//         if(!farmers){
//             return NextResponse.json({
//                 data:null,
//                 message:"customer not found"
//             },{status:404})
//         }

//         const inputdata = { 
//             fullname,
//             phone,
//             email,
//             physicalAddress,
//             contactPerson,
//             contactPersonPhone,
//             terms,
//             notes,
//             isActive,
//             imageUrl,
//             code,

//             }
// console.log(inputdata);
//         const updatedfarmer = await db.farmer.update({
//             where:{
//                 id
//             },
//             data:{
//                 fullname,
//             phone,
//             email,
//             physicalAddress,
//             contactPerson,
//             contactPersonPhone,
//             terms,
//             notes,
//             isActive,
//             imageUrl,
//             code,

//             }
//         })
    
//         return NextResponse.json({message:"customer updated"},updatedfarmer)
//     } catch (error) {
      
//         return NextResponse.json(
//             {
//                 message:"failed to delete farmer",
//                 error,
//             },
//             {
//                 status:500
//             }
//         )
//     }
//     }

    export async function GET(request,{params}){
        const {id} = params
        try {
            const farmer= await db.farmer.findUnique({
                where:{
                    id,
                },
                select:{
                    fullname:true,
                    phone:true,
                    email:true,
                    physicalAddress:true,
                    contactPerson:true,
                    contactPersonPhone:true,
                    terms:true,
                    notes:true,
                    isActive:true,
                    imageUrl:true,
                    code:true,
                    landSize:true,
                    mainCrop:true,
                    products:true,
                    userId:true,

                }
            });
          //  console.log("sgsdgdsdasd",customers);
            return NextResponse.json(farmer)
        } catch (error) {
            console.log(error)
            return NextResponse.json(
                {
                    message:"farmer failed to update",
                    error,
                },
                {
                    status:500
                }
            )
        }
        }
    


   export async function DELETE(request,{params:{id}}) {


                try {
                const farmer= await db.farmer.findUnique({
                    where:{
                        id,
                    },
                });
                if(!farmer){
                    return NextResponse.json({
                        data:null,
                        message:"failed to delete"
                    },{status:404})
                }
        
                const deletedFarmer = await db.farmer.delete({
                    where:{
                        id,
                    }
                })
              //  console.log("sgsdgdsdasd",customers);
                return NextResponse.json({message:"successfully deleted farmer"},deletedFarmer)
            } catch (error) {
                console.log(error)
                return NextResponse.json(
                    {
                        message:"failed to delete Farmer",
                        error,
                    },
                    {
                        status:500
                    }
                )
            }
            }


        