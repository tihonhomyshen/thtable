import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next"
import './Table.css'
import Controls from "../Controls/Controls";


export const Table = () => {
    const { t, i18n } = useTranslation()

    const [items, setItems] = useState([])

    const [items1, setItems1] = useState([])

    useEffect(() => {
        fetch("https://market.csgo.com/api/v2/prices/USD.json")
            .then(response => response.json())
            .then(json => setItems(json.items.slice(0, 500)))
        fetch("https://api.skinport.com/v1/items/")
            .then(response => response.json())
            .then(json => setItems1(json.slice(0,500)))
    }, [])

    const rows = useMemo(() => {
        const result = [];

        items.forEach((i) => {
            result.push({
                name: i.market_hash_name,
                sales1: Number(i.volume),
                price1: Number(i.price),
                price2: null,
                income: null,
                count1: null,
                count2: null
            });
        });

        items1.forEach((i) => {
            const existingItem = result.find((item) => item.name === i.market_hash_name);
            if (existingItem) {
                existingItem.count2 = i.quantity;
                existingItem.price2 = i.min_price; 
                existingItem.income = (existingItem.price1 - existingItem.price2) / existingItem.price2 * 100
            } else {
                result.push (
                    {
                        name: i.market_hash_name,
                        sales1: null,
                        price1: null,
                        price2: i.min_price,
                        income: null,
                        count1: null,
                        count2: i.quantity,
                    }
                )
            }
        });
        return result;
    }, [items, items1])

    return (
        <>
            <div className="container">
                <Controls />
                <table>
                    <thead>
                        <tr>
                            <th>{t("table.name")}</th>
                            <th>{t("table.sales1")}</th>
                            <th>{t("table.price1")}</th>
                            <th>{t("table.price2")}</th>
                            <th>{t("table.income")}</th>
                            <th>{t("table.count1")}</th>
                            <th>{t("table.count2")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(item => {
                            return (
                                <tr className="item">
                                    <td>{item.name}</td>
                                    <td>{item.sales1}</td>
                                    <td>{item.price1}</td>
                                    <td>{item.price2}</td>
                                    <td>{item.income?.toFixed(2)}</td>
                                    <td>{item.count1}</td>
                                    <td>{item.count2}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}