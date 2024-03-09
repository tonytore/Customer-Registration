import React from "react";

export const generateCouponCode = (title="",expiryDate="")=>{
    const formatedTitle = title.toUpperCase().replace(/\s+/g,'');

    // Format the expiry date to 'DDMMYYYY'
const formatedExpiryDate = expiryDate
.split('-')
.reverse()
.join();

// Combine the formatted title and expiry date to create the coupon code
const couponCode = `${formatedTitle}-${formatedExpiryDate}`

return couponCode
}

