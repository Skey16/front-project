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
import {
  collection,
  updateDoc,
  addDoc,
  getDocs,
  doc,
  get,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";
/* import Button from "@mui/material/Button"; */
//import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function EditUsers({ fid, closeEvent }) {
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [ID, setID] = useState(0);
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "users");

  useEffect(() => {
    console.log("FID: " + fid.id);
    setID(fid.ID);
    setUser(fid.user);
    setMail(fid.mail);
    setName(fid.name);
    setLastname(fid.lastname);
  }, []);

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  const handlIDChange = (event) => {
    setID(event.target.value);
  };

  const createUser = async () => {
    const userDoc = doc(db, "users", fid.id);
    const newFields = {
      ID: Number(ID),
      user:name,
      mail: mail,
      name: name,
      lastname: lastname
    };
    await updateDoc(userDoc, newFields);
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "You file has been update.", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit User
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
            label="User"
            variant="outlined"
            size="small"
            onChange={handleUserChange}
            value={user}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Mail"
            variant="outlined"
            size="small"
            onChange={handleMailChange}
            value={mail}
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
            label="Last Name"
            variant="outlined"
            size="small"
            onChange={handleLastnameChange}
            value={lastname}
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
