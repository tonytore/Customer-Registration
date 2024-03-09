import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
      // extract the credentials
        const {
            firstname,
            lastname,
            email,
            phone
    } = await request.json();

// check if the customer already exists in the db
const isCustomer = await db.customer.findUnique({
  where:{
    email,
  }
})

if(isCustomer){
    return NextResponse.json({
        data:null,
        message:"customer Already Exist"
    },{status:409})
}
const newCustomer = await db.customer.create({
    data:{
        firstname,
        lastname,
        email,
        phone
    }
})

return NextResponse.json(newCustomer)
       
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create customer",
                error,
            },{status:500}
        )
    }
}


export async function GET(request){
try {
    const customers= await db.customer.findMany({
        orderBy:{
            createdAt : "desc"
        }
    })
   
    return NextResponse.json(customers)
} catch (error) {
    console.log(error)
    return NextResponse.json(
        {
            message:"Customer failed",
            error,
        },
        {
            status:500
        }
    )
}
}

// export async function PUT(request,{params}) {
  
//     try {
//         const {id} = params
//         const {firstname,lastname,email,phone} = await request.json()
//         console.log(request.json());
//         const customers= await db.customer.findUnique({
//             where:{
//                 id,
//             },
//         });
//         if(!customers){
//             return NextResponse.json({
//                 data:null,
//                 message:"customer not found"
//             },{status:404})
//         }
//         console.log("IN ROUTE",id);
//         const inputdata = { firstname,
//             lastname,
//             email,
//             phone,}
// console.log(inputdata);
//         const updatedCustomer = await db.customer.update({
//             where:{
//                 id
//             },
//             data:{
//                 firstname,
//                 lastname,
//                 email,
//                 phone,
//             }
//         })
//         console.log(updatedCustomer);
//         return NextResponse.json({message:"customer updated"},updatedCustomer)
//     } catch (error) {
      
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

export async function DELETE(request) {

  const id = request.nextUrl.searchParams.get('id')
    try {
    const customers= await db.customer.findUnique({
        where:{
            id,
        },
    });
    if(!customers){
        return NextResponse.json({
            data:null,
            message:"failed to delete"
        },{status:404})
    }

    const deletedCustomer = await db.customer.delete({
        where:{
            id,
        }
    })
  //  console.log("sgsdgdsdasd",customers);
    return NextResponse.json({message:"successfully deleted customer"},deletedCustomer)
} catch (error) {
    console.log(error)
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