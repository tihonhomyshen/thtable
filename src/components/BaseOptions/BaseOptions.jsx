import React, { useState } from 'react'
import Select from 'react-select'
import { useTranslation } from "react-i18next"
import "./BaseOptions.css"

const BaseOptions = () => {

    const { t, i18n } = useTranslation()

    const filters = []

    const [currentCurrency, setCurrentCurrency] = useState('')

    const currencies = [
        { value: 'usd', label: 'USD' },
        { value: 'eur', label: 'EUR' },
        { value: 'cny', label: 'CNY' },
        { value: 'rub', label: 'RUB' }
    ]
    console.log(currentCurrency);

    return (    
        <>
            <div className="base-options">
                <div className="filter">
                    <Select options={filters} placeholder={t("options.filters")}/>
                </div>
                <div className="currency">
                    <Select onChange={(e) => setCurrentCurrency(e.value)} options={currencies} placeholder={t("options.currency")} />
                </div>
            </div>
        </>
    )
}

export default BaseOptions