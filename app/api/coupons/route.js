import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title,couponCode,expiryDate} = await request.json();
     

        const newCoupon = await db.coupon.create({
            data:{
                title,
                couponCode,
                expiryDate
            },
        })

        console.log(newCoupon);
        return NextResponse.json(newCoupon)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create coupon",
                error,
            },{status:500}
        )
    }
}

export async function GET(request){
    try {
        const coupons = await db.coupon.findMany({
            orderBy:{
                createdAt : "desc"
            }
        })
       
        return NextResponse.json(coupons)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"coupone failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }