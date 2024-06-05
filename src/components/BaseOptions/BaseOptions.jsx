import React, { useContext, useState } from 'react'
import { useTranslation } from "react-i18next"
import { MenuItem, Select, TextField } from '@mui/material'
import "./BaseOptions.css"
import { FilterContext } from '../../pages/MainPage/MainPage'

const BaseOptions = () => {

    const { t, i18n } = useTranslation()

    const {currentCurrency, setCurrentCurrency} = useContext(FilterContext)
    const [filter, setFilter] = useState('')

    const filters = [
        { label: 'Autographs' },
        { label: 'Agents' },
        { label: 'Knives'}
    ]

    const currencies = [
        { label: 'USD' },
        { label: 'EUR' },
        { label: 'RUB' }
    ]
    console.log(currentCurrency);

    return (
        <>
            <div className="base-options">
                <div className="filter">
                    <p>{t("options.filters")}</p>
                    <TextField sx={{ minWidth: 100 }} size='small' select onChange={(e) => setFilter(e.target.value)} value={filter} >
                        {filters.map(i =>
                            <MenuItem value={i.label}>{i.label}</MenuItem>
                        )}
                    </TextField>
                </div>
                <div className="currency">
                    <p>{t("options.currency")}</p>
                    <TextField sx={{ minWidth: 100 }} size='small'select onChange={(e) => setCurrentCurrency(e.target.value)} value={currentCurrency}>
                        {currencies.map(i =>
                            <MenuItem value={i.label}>{i.label}</MenuItem>
                        )}
                    </TextField>
                </div>
            </div>
        </>
    )
}

export default BaseOptions