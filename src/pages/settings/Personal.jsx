import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function Personal() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <Box fontWeight="bold" height={40}>
          Personal Information
        </Box>

        <TextField
          label="Name"
          id="name"
          sx={{ m: 1, width: "25ch" }}
          defaultValue="Diego Carmona Bernal"
        />
        <TextField
          label="Location"
          id="location"
          sx={{ m: 1, width: "25ch" }}
          defaultValue="Chiapas,Mexico"
        />

        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            id="outlined-multiline-static"
            label="Bio"
            multiline
            rows={6}
            defaultValue="Lorem ipsum dolor sit amet consectetur adipiscing elit laoreet aenean purus est, sagittis enim vivamus cum fringilla interdum parturient risus mattis. Fames interdum placerat eros iaculis mollis arcu aptent sociis porttitor ornare, et volutpat cum orci auctor risus curabitur euismod mus. Nascetur est vel enim tincidunt conubia at suscipit senectus hac accumsan dapibus sollicitudin luctus cursus dis, sagittis nibh cras ante purus laoreet augue non viverra penatibus etiam commodo torquent."
          />
        </FormControl>
      
      </div>
    </Box>
  );
}
