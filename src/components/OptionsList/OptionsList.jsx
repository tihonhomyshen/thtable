import React from 'react'
import BaseOptions from '../BaseOptions/BaseOptions'
import ServiceOptions from '../ServiceOptions/ServiceOptions'
import SwapButton from '../SwapButton/SwapButton'
import './OptionsList.css'
import { useTranslation } from "react-i18next"

const OptionsList = () => {
    const { t, i18n } = useTranslation()
    return (
        <>
            <div className="container">
                <BaseOptions />
                <div className="settings">
                    <div className="first-service service">
                        <ServiceOptions service={t("options.firstService")}/>
                    </div>
                    <SwapButton />
                    <div className="second-service service">
                        <ServiceOptions service={t("options.secondService")}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OptionsList