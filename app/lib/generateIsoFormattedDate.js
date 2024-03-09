import React from "react";

export default function generateIsoFormattedDate(normalDate) {
    // convert the date string to a js Date object
    const dateObject = new Date(normalDate)

    // Format the date as a string in ISO 8601 FORMAT
    const isoFormattedDate = dateObject.toISOString()
    return  isoFormattedDate;
}
