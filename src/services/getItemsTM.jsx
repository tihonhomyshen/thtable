import React from "react";
import axios from "axios";
import { API } from "../constants/API";

export const getItemsTM = async (currency) => {
    
    console.log(currency)
    const response = await axios.get(`${API.TM}${currency}.json`)
    
    const data = response.data.items.map(i => {
        return {
            name: i.market_hash_name,
            count: null,
            sales: Number(i.volume),
            price: Number(i.price),
        }
    })

    return data;
}