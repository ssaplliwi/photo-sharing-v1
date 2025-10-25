import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
  const location = useLocation();
  const path = location.pathname;
  let title = "";

  if (path.startsWith("/users/")) {
    const userId = path.replace("/users/", "");
    const user = models.userModel(userId);
    title = user ? `${user.first_name} ${user.last_name}` : "User Detail";
  } else if (path.startsWith("/photos/")) {
    const userId = path.replace("/photos/", "");
    const user = models.userModel(userId);
    title = user ? `Photos of ${user.first_name} ${user.last_name}` : "User Photos";
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{justifyContent: "space-between"}}>
        <Typography variant="h6">B22DCAT238 - Nguyen Van Quan</Typography>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
