import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const columns = [
  { field: "id", headerName: "ID", width: 40 },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,

    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 11 },
  { id: 6, lastName: "Melisandre", firstName: "Carmona", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 18, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 20, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 21, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 22, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 23, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 24, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 25, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 26, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 27, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 28, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 29, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 30, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 31, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ProductList() {
  return (
    /*  conts [rowsPerPage,setRowsPerPage]=React.useState(5); */

    <div style={{ height: 500, width: "100%" }} >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
        className="custom-datagrid"
      >
        Product List
      </Typography>
      <Divider/>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        className="custom-datagrid"
      />
    </div>
  );
}
