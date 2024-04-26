import React from "react";
import { useTranslation } from "react-i18next"
import './Table.css'

export const Table = () => {
    const { t, i18n } = useTranslation()

    const items = [

        {
            "name": "butterfly", "sales1": 20, "price1": 12, "price2": 20,
            "income": 0, "count1": 5, "count2": 7
        },
        {
            "name": "ak-47", "sales1": 20, "price1": 12, "price2": 20,
            "income": 0, "count1": 5, "count2": 7
        },

    ]

    return (
        <>
            <div className="container">
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
                        {items.map(item => {
                            return (
                                <tr className="item">
                                    <td>{item.name}</td>
                                    <td>{item.sales1}</td>
                                    <td>{item.price1}</td>
                                    <td>{item.price2}</td>
                                    <td>{item.income}</td>
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