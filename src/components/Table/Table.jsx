import { useTranslation } from "react-i18next"
import './Table.css'
import { DataGrid } from "@mui/x-data-grid";
import { DataGridLocale } from "../../constants/DataGridLocale";



export const Table = ({ data }) => {
    const { t, i18n } = useTranslation()

    const IncomeCell = ({ value }) => {
        if (value === t('table.notFound') || value === 0) return 0

        if (value < 0) {
            return <span style={{ color: 'red' }}>{value}</span>;
        } else if (value > 15) {
            return <span style={{ color: '#76ff03' }}>{value}</span>;
        } else {
            return <span style={{ color: 'green' }}>{value}</span>;
        }
    };

    const columns = [
        { field: 'name', headerName: t("table.name"), width: 300 },
        { field: 'sales1', headerName: t("table.sales1"), width: 150 },
        { field: 'price1', headerName: t("table.price1"), width: 150 },
        { field: 'price2', headerName: t("table.price2"), width: 150 },
        { field: 'income', headerName: t("table.income"), width: 150, renderCell: (params) => <IncomeCell value={params.value} /> },
        { field: 'count1', headerName: t("table.count1"), width: 150 },
        { field: 'count2', headerName: t("table.count2"), width: 150 },
    ]

    return (
        <>
            <div className="container">
                <DataGrid
                    localeText={DataGridLocale}
                    initialState={{ pagination: { paginationModel: { pageSize: 20 } }, }}
                    disableColumnResize
                    columns={columns}
                    rows={data}
                    getRowId={rows => rows.name}
                    slotProps={{ noRowsOverlay: {}, }}
                />
            </div>
        </>
    )
}