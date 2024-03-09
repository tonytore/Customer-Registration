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
            const product= await db.product.findUnique({
                where:{
                    id,
                },
                select:{
                    id:true,
                    title:true,
            slug:true,
            barcode:true,
            sku:true,
            price:true,
            sale:true,
            categoryId:true,
            farmerId:true,
            imageUrl:true,
            description:true,
            isActive:true,
            isWholeSale:true,
            tags:true,
            productCode:true,
            unit:true,
            productStock:true,
            Qty:true,
            wholesalePrice:true,
            wholesaleQty:true
            

                }
            });
          //  console.log("sgsdgdsdasd",customers);
            return NextResponse.json(product)
        } catch (error) {
            console.log(error)
            return NextResponse.json(
                {
                    message:"product failed to update",
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
                const farmer= await db.product.findUnique({
                    where:{
                        id,
                    },
                });
                if(!product){
                    return NextResponse.json({
                        data:null,
                        message:"failed to delete"
                    },{status:404})
                }
        
                const deletedProduct = await db.product.delete({
                    where:{
                        id,
                    }
                })
              //  console.log("sgsdgdsdasd",customers);
                return NextResponse.json({message:"successfully deleted farmer"},deletedProduct)
            } catch (error) {
                console.log(error)
                return NextResponse.json(
                    {
                        message:"failed to delete Product",
                        error,
                    },
                    {
                        status:500
                    }
                )
            }
            }


        