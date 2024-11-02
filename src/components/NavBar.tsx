import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./NavBar.css";
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar sx={{ backgroundColor: "#14313E" }} position="static">
        <Toolbar>
          <button className="loginBtn">Join</button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
