import React, { useEffect, useState } from 'react';

function DataTable({ data, columns, rowsLimitPerPage, textToFilter }) {

    /** Start TBody Section */

    const convertToBodyTable = (data) => {
        return data.map((row, index) => {
            return (
                <tr key={index}>
                    {Object.values(row).map((value, columnIndex) => (
                        <td key={columnIndex}>{value}</td>
                    ))}
                </tr>
            );
        });
    };

    /** End TBody Section */

    /** Start Filter Section */
    const [filteredData, setFilteredData] = useState(data);
    useEffect(() => {
        if (textToFilter) {
            const filtered = (data).filter((row) =>
                Object.values(row).some((value) =>
                    String(value).toLowerCase().includes(textToFilter.toLowerCase())
                )
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [data, textToFilter]);
    /** End Filter Section */

    /** Start Pagination Section */
    const totalPages = Math.ceil(data.length / rowsLimitPerPage);
    const [actualPage, setActualPage] = useState(1);
    const startIndex = (actualPage - 1) * rowsLimitPerPage;
    const endIndex = actualPage * rowsLimitPerPage;
    const dataPage = filteredData.slice(startIndex, endIndex);


    const handlePreviousPage = () => {
        if (actualPage > 1) {
            setActualPage(actualPage - 1);
        }
    };

    const handleNextPage = () => {
        if (actualPage < totalPages) {
            setActualPage(actualPage + 1);
        }
    };
    /** End Pagination Section */

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {convertToBodyTable(dataPage)}
                </tbody>
            </table>

            {filteredData.length > rowsLimitPerPage && (
                <div>
                    {/* Start Pagination Section */}
                    <button onClick={handlePreviousPage} disabled={actualPage === 1}>
                        Anterior
                    </button>
                    <span>{actualPage}</span>
                    <button onClick={handleNextPage} disabled={actualPage === totalPages}>
                        Siguiente
                    </button>
                    {/* End Pagination Section */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <a>{textToFilter}</a>
                </div>
            )}
        </div>
    );
}

export default DataTable;
