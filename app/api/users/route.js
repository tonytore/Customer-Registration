import db from '@/app/lib/db'
import {  NextResponse } from "next/server";
//import bcrypt from 'bcrypt'

export async function POST(request){
    try {
      // extract the credentials
        const {
            name,
            email,
            password,
            role,
    } = await request.json();

// check if the customer already exists in the db
const isUser = await db.user.findUnique({
  where:{
    email,
  }
})

if(isUser){
    return NextResponse.json({
        data:null,
        message:"user Already Exist"
    },{status:409})
}

// encrypt the password
//const hashedPassword = await bcrypt.hash(password,10)

const newUser = await db.user.create({
    data:{
        name,
        email,
        password,
        role,
    }
})
console.log(newUser);
return NextResponse.json({
    data:newUser,
    message: "User created successfully"
},{status:201})
       
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create user",
                error,
            },{status:500}
        )
    }
}


export async function GET(request){
try {
    const users= await db.user.findMany({
        orderBy:{
            createdAt : "desc"
        }
    })
   
    return NextResponse.json(users)
} catch (error) {
    console.log(error)
    return NextResponse.json(
        {
            message:"user failed",
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