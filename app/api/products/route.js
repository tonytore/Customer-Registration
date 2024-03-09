import db from '@/app/lib/db'
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
        const {
            title,
            slug,
            barcode,
            sku,
            price,
            sale,
            categoryId,
            farmerId,
            imageUrl,
            description,
            isActive, 
            isWholeSale,
            tags,
            productCode,
            unit,
            productStock,
            Qty,
            wholesalePrice,
            wholesaleQty
        } = await request.json();

      //  const productData = await request.json()
       

     // check if the customer already exists in the db
const isProduct = await db.product.findUnique({
    where:{
      slug,
    }
  })
  
  if(isProduct){
      return NextResponse.json({
          data:null,
          message:"product Already Exist"
      },{status:409})
  }

       // const newProduct = {title,slug,barcode,sku,price,sale,categoryId,farmerId,imageUrl,description,isActive}
       const newProduct = await db.product.create({
        data:{
            title,
            slug,
            barcode,
            sku,
            price:parseInt(price),
            sale:parseInt(sale),
            categoryId,
            userId:farmerId,
            imageUrl,
            description,
            isActive, 
            isWholeSale,
            tags,
            productCode,
            unit:parseInt(unit),
            productStock:parseInt(productStock),
            Qty:parseInt(Qty),
            wholesalePrice:parseInt(wholesalePrice),
            wholesaleQty:parseInt(wholesaleQty),
        

        },
    })

        console.log(newProduct);
        return NextResponse.json(newProduct)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create product",
                error,
            },{status:500}
        )
    }
}


export async function GET(request){
    try {
        const products= await db.product.findMany({
            orderBy:{
                createdAt : "desc"
            },
         
        })
       
        return NextResponse.json(products)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"product failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }