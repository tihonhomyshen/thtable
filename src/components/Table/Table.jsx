import React from "react";
import { useTranslation } from "react-i18next"

export const Table = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <td>{t("table.name")}</td>
                            <td>{t("table.sales1")}</td>
                            <td>{t("table.price1")}</td>
                            <td>{t("table.price2")}</td>
                            <td>{t("table.income")}</td>
                            <td>{t("table.count1")}</td>
                            <td>{t("table.count2")}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}