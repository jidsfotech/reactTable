import React, { useMemo , useAsyncDebounce} from "react";
import TablePagination from "./Pagination";
import Filters from "./Filters";
import {
    useTable,
    usePagination,
    useFilters,
    useGlobalFilter,
} from 'react-table';

const TransactionsLogTable = ({ columns, data }) => {

    const filterTypes = useMemo(() => ({
        dateFilter: (rows, id, filterValue) => {
            return rows = rows.filter(row => {
                return new Date(row.values.date) >= filterValue[0] && new Date(row.values.date) <= filterValue[1];
            });
        },
    }),
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        setGlobalFilter,
        preGlobalFilteredRows,
        setFilter,
        dispatch,
        state: { pageIndex, pageSize, globalFilter },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 },
            filterTypes,
        },
        useFilters,
        useGlobalFilter,
        usePagination
    );
    return (
        <div className="table-wrapper">
           < Filters
                setFilter={setFilter}
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                dispatch={dispatch}
           />
            <table {...getTableProps()} className="TransactionsTable">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="TransactionsTableBody">
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <TablePagination
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                previousPage={previousPage}
                canPreviousPage={canPreviousPage}
                nextPage={nextPage}
                canNextPage={canNextPage}
            />
        </div>
    );
}

export default TransactionsLogTable;