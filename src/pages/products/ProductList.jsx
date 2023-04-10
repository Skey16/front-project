import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from "@mui/material/Modal";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { useAppStore } from "../../appStore";
import Skeleton from "@mui/material/Skeleton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UsersList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState("");
  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = async () => {
    const data = await (
      await fetch("http://44.201.142.37:8000/api/products")
    ).json();

    setRows(data);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Bórralo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    await fetch(`http://44.201.142.37:8000/api/products/${id}`, {
      method: "DELETE",
    });

    Swal.fire("¡Eliminado!", "Tu producto ha sido eliminado.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      getUsers();
    }
  };

  const editData = (
    id,
    name,
    description,
    product_type,
    image,
    price,
    stock
  ) => {
    const data = {
      id: id,
      name: name,
      description: description,
      product_type: product_type,
      image: image,
      price: price,
      stock: stock,
    };
    setFormid(data);
    handleEditOpen();
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          //onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddProduct closeEvent={handleClose} />
          </Box>
        </Modal>
        <Modal
          open={editopen}
          //onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditProduct closeEvent={handleEditClose} fid={formid} />
          </Box>
        </Modal>
      </div>
      {rows.length > 0 && (
        <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Lista de productos
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Buscar productos..."
                />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              variant="contained"
              endIcon={<AddCircleIcon />}
              onClick={handleOpen}
            >
              Agregar
            </Button>
          </Stack>
          <Box height={10} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    ID
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Nombre
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Descripción
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Categoria
                  </TableCell>
                  <TableCell align="left" style={{ wminWidth: "100px" }}>
                    Imagen
                  </TableCell>
                  <TableCell align="left" style={{ wminWidth: "100px" }}>
                    Precio
                  </TableCell>
                  <TableCell align="left" style={{ wminWidth: "100px" }}>
                    Stock
                  </TableCell>
                  <TableCell align="left" style={{ wminWidth: "100px" }}>
                    Likes
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Acción
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell align="left">{row.id}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">{row.product_type}</TableCell>
                        <TableCell align="left">{row.image}</TableCell>
                        <TableCell align="left">{row.price}</TableCell>
                        <TableCell align="left">{row.stock}</TableCell>
                        <TableCell align="left">{row.likes}</TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              // onClick={() => editUser(row.id)}
                              onClick={() => {
                                editData(
                                  row.id,
                                  row.name,
                                  row.description,
                                  row.product_type,
                                  row.image,
                                  row.price,
                                  row.stock
                                );
                              }}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={"Filas por página:"}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      {rows.length === 0 && (
        <>
          <Paper sx={{ wifth: "98%", overflow: "hidden", padding: "12px" }}>
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} heigth={30} />
            <Box height={40} />ç
            <Skeleton variant="rectangular" width={"100%"} heigth={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} heigth={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} heigth={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} heigth={60} />
            <Box height={20} />
            <Skeleton variant="rectangular" width={"100%"} heigth={60} />
            <Box height={20} />
          </Paper>
        </>
      )}
    </>
  );
}
