import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";

export default function EditProduct({ fid, closeEvent }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pieces, setPieces] = useState(0);
  const [price, setPrice] = useState(0);
  const [likes, setLikes] = useState(0);
  const [ID, setID] = useState(0);
  const [productType, setProductType] = useState("");
  const setRows = useAppStore((state) => state.setRows);

  useEffect(() => {
    console.log("FID: " + fid.id);
    setID(fid.ID);
    setName(fid.name);
    setDescription(fid.description);
    setPieces(fid.pieces);
    setPrice(fid.price);
    setLikes(fid.likes);
    setProductType(fid.productType);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePiecesChange = (event) => {
    setPieces(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleLikesChange = (event) => {
    setLikes(event.target.value);
  };
  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };
  const handlIDChange = (event) => {
    setID(event.target.value);
  };

  const updateUser = async () => {
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "You file has been update.", "success");
  };

  const getUsers = async () => {};

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            type="number"
            size="small"
            onChange={handlIDChange}
            value={ID}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
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
            label="Product Type"
            variant="outlined"
            size="small"
            onChange={handleProductTypeChange}
            value={productType}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            size="small"
            onChange={handleDescriptionChange}
            value={description}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
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
            label="Pieces"
            variant="outlined"
            type="number"
            size="small"
            onChange={handlePiecesChange}
            value={pieces}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Likes"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleLikesChange}
            value={likes}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={updateUser}>
              Actualizar
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 2 }} />
    </>
  );
}
