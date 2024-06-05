import React, { createContext, useState } from "react";
import OptionsList from "../../components/OptionsList/OptionsList";
import { Table } from "../../components/Table/Table";

export const FilterContext = createContext()

const MainPage = () => {

    const [currentCurrency, setCurrentCurrency] = useState('USD')
    
    return (
        <FilterContext.Provider value={{currentCurrency, setCurrentCurrency}}>
            <OptionsList/>
            <Table/>
        </FilterContext.Provider>
    )
}

export default MainPage;