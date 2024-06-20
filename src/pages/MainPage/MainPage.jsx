import { createContext, useEffect, useMemo, useState } from "react";
import OptionsList from "../../components/OptionsList/OptionsList";
import { Table } from "../../components/Table/Table";
import useApi, { SERVICE_NAMES } from "../../hooks/useApi";
import { Alert, Paper, Snackbar } from "@mui/material";
import { filterItems } from "../../helpers/filterItems";
import { useTranslation } from "react-i18next";

export const FilterContext = createContext()
export const ServiceContext = createContext()


const MainPage = () => {
    const { t } = useTranslation()
    const [currentCurrency, setCurrentCurrency] = useState('USD')
    const [globalFilter, setGlobalFilter] = useState({ minPrice1: '', maxPrice1: '', minPrice2: '', maxPrice2: '' })
    const [result, setResult] = useState([])

    const { data: firstData, error: firstError, service: firstService, fetchData: fetchFirstData, switchApi: switchFirstApi } = useApi(SERVICE_NAMES.SKINPORT);
    const { data: secondData, error: secondError, service: secondService, fetchData: fetchSecondData, switchApi: swtichSecondApi } = useApi(SERVICE_NAMES.TM);

    useEffect(() => {
        fetchFirstData({ currency: currentCurrency })
        fetchSecondData({ currency: currentCurrency })
    }, [currentCurrency])

    const handleFirstSwitchApi = (service) => {
        switchFirstApi(service)
    }

    const handleSecondSwitchApi = (service) => {
        swtichSecondApi(service)
    }

    const data = useMemo(() => {
        const result = [];
        firstData?.forEach((i) => {
            result.push({
                name: i.name,
                sales1: Number(i.sales),
                price1: Number(i.price),
                price2: t('table.notFound'),
                income: t('table.notFound'),
                count1: i.count || t('table.notFound'),
                count2: t('table.notFound'),
            });
        });

        secondData?.forEach((i) => {
            const existingItem = result.find((item) => item.name === i.name);
            if (existingItem) {
                existingItem.count2 = i.count || t('table.notFound');
                existingItem.price2 = i.price;
                const income = (existingItem.price1 - existingItem.price2) / existingItem.price2 * 100
                existingItem.income = Math.round(income * 10) / 10
            } else {
                result.push(
                    {
                        name: i.name,
                        sales1: t('table.notFound'),
                        price1: t('table.notFound'),
                        price2: i.price,
                        income: t('table.notFound'),
                        count1: t('table.notFound'),
                        count2: i.count || t('table.notFound'),
                    }
                )
            }
        });
        return result;
    }, [firstData, secondData])


    useEffect(() => {
        if (data) {
            setResult(data)
            setGlobalFilter({ maxPrice1: '', maxPrice2: '', minPrice1: '', minPrice2: '' })
        }
    }, [data])

    const filterData = (filter) => {
        setResult(filterItems(data, filter))
    }

    const handleFirstFilter = (filter) => {
        setGlobalFilter(prev => ({ ...prev, minPrice1: filter.minPrice, maxPrice1: filter.maxPrice }))
        filterData({ ...globalFilter, minPrice1: filter.minPrice, maxPrice1: filter.maxPrice })
    }

    const handleSecondFilter = (filter) => {
        setGlobalFilter(prev => ({ ...prev, minPrice2: filter.minPrice, maxPrice2: filter.maxPrice }))
        filterData({ ...globalFilter, minPrice2: filter.minPrice, maxPrice2: filter.maxPrice })
    }

    return (
        <ServiceContext.Provider value={{ firstService, secondService, onSwitchFirstService: handleFirstSwitchApi, onSwitchSecondService: handleSecondSwitchApi }}>
            <FilterContext.Provider value={{ currentCurrency, globalFilter, setCurrentCurrency, onFirstFilter: handleFirstFilter, onSecondFilter: handleSecondFilter }}>
                {(firstError || secondError) && <Snackbar open={Boolean((firstError || secondError))} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                    <Paper elevation={1}>
                        <Alert sx={{ maxWidth: 600, minWidth: 300 }} severity={'error'}>
                            {firstError && `${firstService}, ${firstError.request.status}: ${firstError.message}`}
                            <br />
                            {secondError && `${secondService}, ${secondError.request.status}: ${secondError.message}`}
                        </Alert>
                    </Paper>
                </Snackbar>
                }
                <OptionsList />
                <Table data={result} />
            </FilterContext.Provider>
        </ServiceContext.Provider>
    )
}

export default MainPage;