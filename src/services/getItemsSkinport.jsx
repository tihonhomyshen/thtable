import axios from "axios";
import { API } from "../constants/API";

export const getItemsSkinport = async ({ currency }) => {
    const response = await axios.get(`${API.SKINPORT}`, { params: { currency } })

    const data = response.data.slice(0, 1000).map(i => {
        return {
            name: i.market_hash_name,
            sales: null,
            price: i.min_price,
            count: i.quantity,
        }
    })

    return data;
}