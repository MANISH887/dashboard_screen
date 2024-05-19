import React from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from "react-table";
import "./../styles/DataTable.scss";

const DataTable = ({ columns, data }) => {
  const {
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div>
      <input value={globalFilter || ""} onChange={(e) => setGlobalFilter(e.target.value || undefined)} placeholder={`Global search...`} className="input_box" />
      <table className="data-table">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index}>
              {headerGroup.headers.map((column, columnIndex) => {
                const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
                return (
                  <th key={columnIndex}>
                    <div key={key} {...rest} className="table_header_content">
                      {column.render("Header")}
                      <span>{column.isSorted ? (column.isSortedDesc ? " ⇩" : " ⇧") : ""}</span>
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
          {[10, 20, 30, 40, 50].map((size, index) => (
            <option key={index} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DataTable;
