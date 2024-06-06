import React, { useContext, useState } from 'react'
import { useTranslation } from "react-i18next"
import "./ServiceOptions.css"
import { TextField, MenuItem } from '@mui/material'
import { FilterContext } from '../../pages/MainPage/MainPage'

const ServiceOptions = (props) => {
    const { t, i18n } = useTranslation()


    const { currentCurrency, setCurrentCurrency } = useContext(FilterContext)

    const [service, setService] = useState('')

    const [priceType, setpriceType] = useState('')

    const services = [
        { label: "Skinport" },
        { label: "TM" }
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
                    <TextField sx={{ minWidth: 100 }} size='small' select onChange={(e) => setService(e.target.value)} value={service} >
                        {services.map(i =>
                            <MenuItem value={i.label}>{i.label}</MenuItem>
                        )}
                    </TextField>
                </div>
                <div className="price-type">
                    <p>{t("options.priceType")}</p>
                    <TextField sx={{ minWidth: 100 }} size='small' select onChange={(e) => setpriceType(e.target.value)} value={priceType} >
                        {priceTypes.map(i =>
                            <MenuItem value={i.label}>{i.label}</MenuItem>
                        )}
                    </TextField>
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