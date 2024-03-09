
import db from "@/app/lib/db";
import {  NextResponse } from "next/server";



export async function PUT(request,{params}) {
  
    try {
        const {id} = params
        const { title,
            slug,
            description,
            isActive,
            imageUrl,} = await request.json()
        
        const categories= await db.category.findUnique({
            where:{
                id,
            },
        });
        if(!categories){
            return NextResponse.json({
                data:null,
                message:"Category not found"
            },{status:404})
        }

        const inputdata = { title,
            slug,
            description,
            isActive,
            imageUrl,}
console.log(inputdata);
        const updatedCategory = await db.category.update({
            where:{
                id
            },
            data:{
                title,
                slug,
                description,
                isActive,
                imageUrl,
            }
        })
    
        return NextResponse.json({message:"customer updated"},updatedCategory)
    } catch (error) {
      
        return NextResponse.json(
            {
                message:"failed to delete Category",
                error,
            },
            {
                status:500
            }
        )
    }
    }

    export async function GET(request,{params}){
        const {id} = params
        try {
            const categories= await db.category.findUnique({
               
                where:{
                    id,
                },
                
                 include:{
                      products:true,
                   },
            
            });
            console.log(categories)
          //  console.log("sgsdgdsdasd",customers);
            return NextResponse.json(categories)
        } catch (error) {
            console.log(error)
            return NextResponse.json(
                {
                    message:" category failed to Get",
                    error,
                },
                {
                    status:500
                }
            )
        }
        }
    


   // export async function DELETE(request,{params:{id}}) {


        //         try {
        //         const customers= await db.customer.findUnique({
        //             where:{
        //                 id,
        //             },
        //         });
        //         if(!customers){
        //             return NextResponse.json({
        //                 data:null,
        //                 message:"failed to delete"
        //             },{status:404})
        //         }
        
        //         const deletedCustomer = await db.customer.delete({
        //             where:{
        //                 id,
        //             }
        //         })
        //       //  console.log("sgsdgdsdasd",customers);
        //         return NextResponse.json({message:"successfully deleted customer"},deletedCustomer)
        //     } catch (error) {
        //         console.log(error)
        //         return NextResponse.json(
        //             {
        //                 message:"failed to delete Customer",
        //                 error,
        //             },
        //             {
        //                 status:500
        //             }
        //         )
        //     }
        //     }


        