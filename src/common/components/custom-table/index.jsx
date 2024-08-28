import React, { useState } from "react";
import usePagination from "./use-pagination.hook";
import useWidth from "../../hooks/use-dimenstion.hook";


export default function CustomTable({ columns, data, selectable = false }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const rowsPerPage = 5;
  const {windowWidth} = useWidth()
  const {
    currentPage,
    totalPages,
    paginatedData,
    handlePageChange,
    getPageNumbers,
  } = usePagination(data, rowsPerPage);

  const handleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSelectAll = (e) => {
    setSelectedRows(e.target.checked ? data.map((_, i) => i) : []);
  };

  return (
    <>
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className="text-gray text-sm text-left font-medium pt-4 pb-2 pr-4 whitespace-nowrap"
                >
                  {column.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)}>
                  No data found
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rowIndex) => (
                <tr key={rowIndex + currentPage * rowsPerPage}>
                  {columns.map((column) => (
                    <td
                      key={column.accessor}
                      className="py-4 pr-4 border-b border-[#89909D33] text-xs text-white"
                    >
                      {column.render
                        ? column.render(row[column.accessor], row)
                        : row[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      
      </div>
      {data.length > rowsPerPage && (
        <div className="flex justify-center md:justify-end py-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className="font-semibold rounded-l flex gap-3 items-center px-5 py-2 border text-black border-[#EFF0F2]  bg-white disabled:opacity-50"
          >
            
            {windowWidth < 767 ? "" : "Previous"}
          </button>
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() =>
                typeof page === "number" && handlePageChange(page - 1)
              }
              className={`text-black font-semibold px-5 py-2 border border-l-0 border-grey bg-white ${
                currentPage + 1 === page ? "activePaginate text-white" : ""
              }`}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="flex px-5 py-2 border-l-0 rounded-r font-semibold items-center gap-4 border text-black border-[#EFF0F2] bg-white disabled:opacity-50"
          >
            {windowWidth < 767 ? "" : "Next"}

           
          </button>
        </div>
      )}
    </>
  );
}
