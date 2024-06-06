import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next"
import './Table.css'
import useApi from "../../hooks/useApi";
import { getItemsTM} from "../../services/getItemsTM";
import { getItemsSkinport } from "../../services/getItemsSkinport";
import { API } from "../../constants/API";
import { DataGrid} from "@mui/x-data-grid";
import { useContext } from "react";
import { FilterContext } from "../../pages/MainPage/MainPage";
import { DataGridLocale } from "../../constants/DataGridLocale";



export const Table = () => {
    const { t, i18n } = useTranslation()

    const {data, loading, error, fetchData, switchApi} = useApi(getItemsTM);

    const {data:data1, loading:loading1, error:error1, fetchData:fetchData1, switchApi:switchApi1} = useApi(getItemsSkinport);

    const {currentCurrency, setCurrentCurrency} = useContext(FilterContext)

    const IncomeCell = ({ value }) => {
        if (value < 0) {
          return <span style={{ color: 'red' }}>{value}</span>;
        } else if (value > 15) {
          return <span style={{ color: '#76ff03' }}>{value}</span>;
        } else {
          return <span style={{ color: 'green' }}>{value}</span>;
        }
      };

    useEffect(() => {
        fetchData(currentCurrency);
        fetchData1(currentCurrency);
    }, [currentCurrency])

    const columns = [
        { field: 'name', headerName: t("table.name"), width: 300},
        { field: 'sales1', headerName: t("table.sales1"), width: 150 },
        { field: 'price1', headerName: t("table.price1"), width: 150 },
        { field: 'price2', headerName: t("table.price2"), width: 150 },
        { field: 'income', headerName: t("table.income"), width: 150, renderCell: (params) => <IncomeCell value={params.value}/>},
        { field: 'count1', headerName: t("table.count1"), width: 150 },
        { field: 'count2', headerName: t("table.count2"), width: 150 },
    ]
    
    const handleSwitchApi = (newApi) => {
        switchApi(newApi);
        fetchData();
      };

    const rows = useMemo(() => {
        const result = [];
        data?.forEach((i) => {
            result.push({
                name: i.name,
                sales1: Number(i.sales),
                price1: Number(i.price),
                price2: null,
                income: null,
                count1: null,
                count2: null
            });
        });

        data1?.forEach((i) => {
            const existingItem = result.find((item) => item.name === i.name);
            if (existingItem) {
                existingItem.count2 = i.count;
                existingItem.price2 = i.price; 
                const income = (existingItem.price1 - existingItem.price2) / existingItem.price2 * 100
                existingItem.income = Math.round(income * 10) / 10
            } else {
                result.push (
                    {
                        name: i.name,
                        sales1: null,
                        price1: null,
                        price2: i.price,
                        income: null,
                        count1: null,
                        count2: i.count,
                    }
                )
            }
        });
        return result;
    }, [data, data1])

    return (
        <>
            <div className="container">
                <DataGrid localeText={DataGridLocale} initialState={{pagination: {paginationModel: {pageSize: 20}}}} disableColumnResize columns={columns} rows={rows} getRowId={rows => rows.name}/>
            </div>
        </>
    )
}