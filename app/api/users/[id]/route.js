import db from '@/app/lib/db'
import {  NextResponse } from "next/server";



// export async function PUT(request,{params}) {
  
//     try {
//         const {id} = params
//         const { name,
//             email,
//             password
//         } = await request.json()
        
//         const user= await db.user.findUnique({
//             where:{
//                 id,
//             },
//         });
//         if(!user){
//             return NextResponse.json({
//                 data:null,
//                 message:"user not found"
//             },{status:404})
//         }

//         const inputdata = { 
//             name,
//             email,
//             password
//         }
// console.log(inputdata);
//         const updateUser = await db.user.update({
//             where:{
//                 id
//             },
//             data:{
//                 name,
//                 email,
//                 password
//             }
//         })
    
//         return NextResponse.json({message:"user updated"},updateUser)
//     } catch (error) {
      
//         return NextResponse.json(
//             {
//                 message:"failed to update user",
//                 error,
//             },
//             {
//                 status:500
//             }
//         )
//     }
//     }

    export async function GET(request,{params:{id}}){
      //  const {id} = params
        try {
            const user= await db.user.findUnique({
                where:{
                    id,
                },
                select:{
                    id:true,
                    name:true,
                    email:true,
                    password:true,
                    emailVerified:true,
                    role:true,
                    createdAt: true,    
                    updatedAt:true
                    
                }
            });
          //  console.log("sgsdgdsdasd",customers);
            return NextResponse.json(user)
        } catch (error) {
            console.log(error)
            return NextResponse.json(
                {
                    message:"user failed to update",
                    error,
                },
                {
                    status:500
                }
            )
        }
        }
    


//    export async function DELETE(request,{params:{id}}) {


//                 try {
//                 const user= await db.user.findUnique({
//                     where:{
//                         id,
//                     },
//                 });
//                 if(!user){
//                     return NextResponse.json({
//                         data:null,
//                         message:"failed to delete"
//                     },{status:404})
//                 }
        
//                 const deletedUser = await db.user.delete({
//                     where:{
//                         id,
//                     }
//                 })
//               //  console.log("sgsdgdsdasd",customers);
//                 return NextResponse.json({message:"successfully deleted customer"},deletedUser)
//             } catch (error) {
//                 console.log(error)
//                 return NextResponse.json(
//                     {
//                         message:"failed to delete user",
//                         error,
//                     },
//                     {
//                         status:500
//                     }
//                 )
//             }
//             }


        