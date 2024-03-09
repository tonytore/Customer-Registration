import db from '@/app/lib/db'
import {  NextResponse } from "next/server";



export async function PUT(request,{params}) {
  
    try {
        const {id} = params
        const {firstname,lastname,email,phone} = await request.json()
        
        const customers= await db.customer.findUnique({
            where:{
                id,
            },
        });
        if(!customers){
            return NextResponse.json({
                data:null,
                message:"customer not found"
            },{status:404})
        }

        const inputdata = { firstname,
            lastname,
            email,
            phone,}
console.log(inputdata);
        const updatedCustomer = await db.customer.update({
            where:{
                id
            },
            data:{
                firstname,
                lastname,
                email,
                phone,
            }
        })
    
        return NextResponse.json({message:"customer updated"},updatedCustomer)
    } catch (error) {
      
        return NextResponse.json(
            {
                message:"failed to delete Customer",
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
            const customers= await db.customer.findUnique({
                where:{
                    id,
                },
                select:{
                    email:true,
                    firstname:true,
                    lastname:true,
                    phone:true
                }
            });
          //  console.log("sgsdgdsdasd",customers);
            return NextResponse.json(customers)
        } catch (error) {
            console.log(error)
            return NextResponse.json(
                {
                    message:"Customer failed to update",
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


        