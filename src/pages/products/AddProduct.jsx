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
import MenuItem from "@mui/material/MenuItem";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import Swal from "sweetalert2";
/* import Button from "@mui/material/Button"; */
//import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function AddProduct({ closeEvent }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pieces, setPieces] = useState(0);
  const [price, setPrice] = useState(0);
  const [likes, setLikes] = useState(0);
  const [ID, setID] = useState(0);
  const [productType, setProductType] = useState("");
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "products");

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

  const createUser = async () => {
    await addDoc(empCollectionRef, {
      ID: Number(ID),
      name: name,
      productType: productType,
      description: description,
      price: Number(price),
      pieces: Number(pieces),
      likes: Number(likes),
    });
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "You file has been submitted.", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Product
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
            <Button variant="contained" onClick={createUser}>
              Add
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}
