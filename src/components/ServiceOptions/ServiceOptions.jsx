import React from 'react'
import { useTranslation } from "react-i18next"
import "./ServiceOptions.css"

const ServiceOptions = (props) => {
    const { t, i18n } = useTranslation()

    const services = [
        { value: "steam", label: "Steam" },
        { value: "csgomarket", label: "TM" },
    ]

    const priceTypes = [
        { value: "casual", label: t("priceType.casual") },
        { value: "autobuy", label: t("priceType.autobuy") },
        { value: "average", label: t("priceType.average") },
    ]

    return (
        <>
            <div className="service-options">
                <div className="service">
                    <p>{props.service}</p>
                    {/* <Select options={services} placeholder={t("options.chooseService")} className='chooseService' /> */}
                </div>
                <div className="price-type">
                    <p>{t("options.priceType")}</p>
                    {/* <Select options={priceTypes} placeholder={t("options.priceType")} /> */}
                </div>
            </div>
            <div className="input-options">
                <div className="min-price">
                    <p>{t("options.minPrice")}</p>
                    <input type="text" />
                </div>
                <div className="max-price">
                    <p>{t("options.maxPrice")}</p>
                    <input type="text" />
                </div>
                <div className="min-count">
                    <p>{t("options.minCount")}</p>
                    <input type="text" />
                </div>
                <div className="max-count">
                    <p>{t("options.maxCount")}</p>
                    <input type="text" />
                </div>
            </div>
        </>
    )
}

export default ServiceOptions