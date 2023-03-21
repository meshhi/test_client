import { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAllPersons from "../store/async-thunks/persons-thunk";
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const Persons = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
  ]);
  const [columnDefs, setColumnDefs] = useState([
    {field: 'make', filter: true},
    {field: 'model', filter: true},
    {field: 'price'}
  ]);

  const defaultColDef = useMemo( ()=> ({
    sortable: true
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPersons());
  }, []);

  return(
  <>
    <AgGridReact
      ref={gridRef} // Ref for accessing Grid's API

      rowData={rowData} // Row Data for Rows

      columnDefs={columnDefs} // Column Defs for Columns
      defaultColDef={defaultColDef} // Default Column Properties

      animateRows={true} // Optional - set to 'true' to have rows animate when sorted
      rowSelection='multiple' // Options - allows click selection of rows

      onCellClicked={() => console.log('cell clicked')} // Optional - registering for Grid Event
    />
  </>
  )
}

export default Persons;