import { useContext, useState } from 'react'
import { useTranslation } from "react-i18next"
import "./BaseOptions.css"
import { FilterContext } from '../../pages/MainPage/MainPage'
import { Select } from '../Select'

const BaseOptions = () => {

    const { t } = useTranslation()

    const { currentCurrency, setCurrentCurrency } = useContext(FilterContext)
    const [filter, setFilter] = useState('')

    const filters = [
        { label: 'Autographs' },
        { label: 'Agents' },
        { label: 'Knives' }
    ]

    const currencies = [
        { label: 'USD' },
        { label: 'EUR' },
        { label: 'RUB' }
    ]

    return (
        <>
            <div className="base-options">
                <div className="filter">
                    <p>{t("options.filters")}</p>
                    <Select options={filters} onChange={(e) => setFilter(e.target.value)} value={filter} />
                </div>
                <div className="currency">
                    <p>{t("options.currency")}</p>
                    <Select options={currencies} onChange={(e) => setCurrentCurrency(e.target.value)} value={currentCurrency} />
                </div>
            </div>
        </>
    )
}

export default BaseOptions