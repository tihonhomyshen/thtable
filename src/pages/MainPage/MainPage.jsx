import React, { createContext, useState } from "react";
import OptionsList from "../../components/OptionsList/OptionsList";
import { Table } from "../../components/Table/Table";

export const FilterContext = createContext()
export const ServiceContext = createContext()

const MainPage = () => {

    const [currentCurrency, setCurrentCurrency] = useState('USD')
    const [service, setService] = useState('')

    return (
        <ServiceContext.Provider value ={{service, setService}}>
            <FilterContext.Provider value={{ currentCurrency, setCurrentCurrency }}>
                <OptionsList />
                <Table />
            </FilterContext.Provider>
        </ServiceContext.Provider>
    )
}

export default MainPage;