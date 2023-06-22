# ReeactGenericTable
A table made with react that takes rows(data), columns(name of the columns), row limit per page(table pagination) and text to filter in every column as params.


how to use:

import DataTable from './your/route/Table'

// in case of using the textToFilter i recommend to use "useState" from react, in other case textToFilter can be an empty string ("") and the filter doesn't affect

import { useState } from 'react'

const [textToFilter, setTextToFilter] = useState("")


const rowsToShow = 5 // you can use a variable or use the number in the params

const dataColumns = ['Column1', 'Column2', 'Column3', 'Column N']  // Add all the rows that you need

<DataTable
    data={dataArray}
    columns={ColumnsNameArray}
    rowsLimitPerPage={rowsToShow}
    textToFilter={textToFilter}
/>
