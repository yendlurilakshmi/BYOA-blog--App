import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
// import { useStyles } from "./utils";

// const useStyles = makeStyles((theme) => ({
//   font: {
//     fontFamily: "Arial, sans-serif",
//     fontSize: "16px",
//     fontWeight: 600,
//     // Add more font styles as needed
//   },
// }));


const Header = () => {
  const [value, setValue] = useState(0);
  // const classes = useStyles(); // Assuming useStyles is defined correctly
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn); // Make sure you define `isLoggedIn` in your Redux store

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">
          BlogsApp
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
  
                component={Link}
                to="/blogs"
                label="All Blogs"
              />
              <Tab
                component={Link}
                to="/myBlogs"
                label="My Blogs"
              />
              <Tab
                component={Link}
                to="/blogs/add"
                label="Add Blog"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                component={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              component={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
