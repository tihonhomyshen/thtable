import { useState } from 'react'
import { useTranslation } from "react-i18next"
import "./ServiceOptions.css"
import { TextField, } from '@mui/material'
import { Select } from '../Select'
import { SERVICE_NAMES } from '../../hooks/useApi'

const ServiceOptions = (props) => {
    const { title, service, filter, onSwitchService, onFilter } = props
    const { t } = useTranslation()

    const [priceType, setpriceType] = useState('')

    const services = Object.keys(SERVICE_NAMES).map(label => ({ label }))

    const priceTypes = [
        { value: "casual", label: t("priceType.casual") },
        { value: "autobuy", label: t("priceType.autobuy") },
        { value: "average", label: t("priceType.average") },
    ]

    const handleChangeMinprice = (e) => {
        const value = e.target.value ? Number(e.target.value) : ''
        onFilter({ minPrice: value, maxPrice: filter.maxPrice })
    }

    const handleChangeMaxprice = (e) => {
        const value = e.target.value ? Number(e.target.value) : ''

        onFilter({ minPrice: filter.minPrice, maxPrice: value, })
    }

    return (
        <>
            <div className="service-options">
                <div className="service">
                    <p>{title}</p>
                    <Select options={services} onChange={(e) => onSwitchService(e.target.value)} value={service} />
                </div>
                <div className="price-type">
                    <p>{t("options.priceType")}</p>
                    <Select options={priceTypes} onChange={(e) => setpriceType(e.target.value)} value={priceType} />
                </div>
            </div>
            <div className="input-options">
                <div className="min-price">
                    <p>{t("options.minPrice")}</p>
                    <TextField size='small' type="number" value={filter.minPrice} onChange={handleChangeMinprice} />
                </div>
                <div className="max-price">
                    <p>{t("options.maxPrice")}</p>
                    <TextField size='small' type="number" value={filter.maxPrice} onChange={handleChangeMaxprice} />
                </div>
                <div className="min-count">
                    <p>{t("options.minCount")}</p>
                    <TextField size='small' type="number" />
                </div>
                <div className="max-count">
                    <p>{t("options.maxCount")}</p>
                    <TextField size='small' type="number" />
                </div>
            </div>
        </>
    )
}

export default ServiceOptions