import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <Box fontWeight="bold" height={40}>
          Personal Contact
        </Box>

        <TextField
          label="Contact Phone"
          id="phone"
          sx={{ m: 1, width: "25ch" }}
          defaultValue="961-289-1198"
        />
        <TextField
          label="Email"
          id="email"
          sx={{ m: 1, width: "25ch" }}
          defaultValue="dcarmona@gmail.com"
        />
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            fullWidth
            label="Profile Url"
            id="profileurl"
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
            defaultValue="https://github.com/carmonabernaldiego"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            id="outlined-multiline-static"
            label="Addres"
            multiline
            rows={6}
            defaultValue="Addres"
          />
        </FormControl>
      </div>
    </Box>
  );
}
