import { useContext } from 'react'
import BaseOptions from '../BaseOptions/BaseOptions'
import ServiceOptions from '../ServiceOptions/ServiceOptions'
import './OptionsList.css'
import { useTranslation } from "react-i18next"
import { FilterContext, ServiceContext } from '../../pages/MainPage/MainPage'

const OptionsList = () => {
    const { t } = useTranslation()
    const { firstService, secondService, onSwitchFirstService, onSwitchSecondService } = useContext(ServiceContext)
    const { globalFilter, onFirstFilter, onSecondFilter } = useContext(FilterContext)

    return (
        <>
            <div className="container">
                <BaseOptions />
                <div className="settings">
                    <div className="first-service service">
                        <ServiceOptions service={firstService} title={t("options.firstService")} onSwitchService={onSwitchFirstService} onFilter={onFirstFilter} filter={{ minPrice: globalFilter.minPrice1, maxPrice: globalFilter.maxPrice1 }} />
                    </div>
                    <div className="second-service service">
                        <ServiceOptions service={secondService} title={t("options.secondService")} onSwitchService={onSwitchSecondService} onFilter={onSecondFilter} filter={{ minPrice: globalFilter.minPrice2, maxPrice: globalFilter.maxPrice2 }} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default OptionsList