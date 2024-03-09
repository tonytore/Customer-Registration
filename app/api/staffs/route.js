import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
        const {fullname,email,password,phone,physicalAddress,notes,isActive,nin,dob} = await request.json();
       // const newStaff = {fullname,nin,dob,isActive,email,password,phone,physicalAddress,notes}
        const newStaff = await db.staff.create({
            data:{
                fullname,
                nin,
                dob,
                email,
                password,
                phone,
                physicalAddress,
                notes,
                isActive
            },
        })
        console.log(newStaff);
        return NextResponse.json(newStaff)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create staff",
                error,
            },{status:500}
        )
    }
}

export async function GET(request){
    try {
        const staff= await db.staff.findMany({
            orderBy:{
                createdAt : "desc"
            }
        })
       
        return NextResponse.json(staff)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"staff failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }