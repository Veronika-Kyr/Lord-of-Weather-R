import React from "react";


export default function CurrentDate(props) {
    let dayNumber = props.date.getDate();
    let months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    let month = months[props.date.getMonth()];

    return (
        <p> {dayNumber} {" "} {month} </p>
    )
}