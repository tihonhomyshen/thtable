import React from "react";

const Item = ({name, sales, price1, price2, income, count1, count2}) => {
    return (
        <>
            <div>{name}</div>
            <div>{sales}</div>
            <div>{price1}</div>
            <div>{price2}</div>
            <div>{income}</div>
            <div>{count1}</div>
            <div>{count2}</div>
        </>
    )
}

export default Item