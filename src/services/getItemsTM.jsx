import axios from "axios";
import { API } from "../constants/API";

export const getItemsTM = async ({ currency }) => {
    const response = await axios.get(`${API.TM}${currency}.json`)

    const data = response.data.items.slice(0, 1000).map(i => {
        return {
            name: i.market_hash_name,
            count: null,
            sales: Number(i.volume),
            price: Number(i.price),
        }
    })

    return data;
}