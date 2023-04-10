import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";

export default function AddProduct({ closeEvent }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [product_type, setProductType] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const setRows = useAppStore((state) => state.setRows);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const createUser = async () => {
    if (!name || !description || !product_type || !image || !price || !stock) {
      closeEvent();
      Swal.fire("¡Error!", "Por favor completa todos los campos.", "error");
    } else {
      await fetch("http://44.201.142.37:8000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          product_type,
          image,
          price,
          stock,
        }),
      });

      getUsers();
      closeEvent();
      Swal.fire(
        "¡Agregado!",
        "El producto ha sido añadido correctamente.",
        "success"
      );
    }
  };

  const getUsers = async () => {
    const data = await (
      await fetch("http://44.201.142.37:8000/api/products")
    ).json();

    setRows(data);
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Agregar producto
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            size="small"
            onChange={handleNameChange}
            value={name}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Descripción"
            variant="outlined"
            size="small"
            onChange={handleDescriptionChange}
            value={description}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="type-product">Categoria</InputLabel>
            <Select
              labelId="type-product"
              id="select-type-product"
              value={product_type}
              label="Categoria"
              onChange={handleProductTypeChange}
            >
              <MenuItem value={"electronica"}>Electrónica</MenuItem>
              <MenuItem value="ropa">Ropa y Accesorios</MenuItem>
              <MenuItem value="hogar">Hogar y Jardín</MenuItem>
              <MenuItem value="deportes">Deportes y Aire Libre</MenuItem>
              <MenuItem value="belleza">Belleza y Cuidado Personal</MenuItem>
              <MenuItem value="juguetes">Juguetes y Juegos</MenuItem>
              <MenuItem value="libros">Libros y Audiolibros</MenuItem>
              <MenuItem value="musica">Música</MenuItem>
              <MenuItem value="peliculas">Películas y Series de TV</MenuItem>
              <MenuItem value="comida">Comida y Bebida</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Imagen"
            variant="outlined"
            size="small"
            onChange={handleImageChange}
            value={image}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Precio"
            variant="outlined"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            size="small"
            onChange={handlePriceChange}
            value={price}
            sx={{ minWidth: "100%" }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Stock"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleStockChange}
            value={stock}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Agregar
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 2 }} />
    </>
  );
}
