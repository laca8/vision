import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigator("/login");
  };
  const loginRed = useSelector((state) => state.loginRed);
  const { userInfo } = loginRed;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigator("/")}
          >
            Visi
            <RemoveRedEyeIcon />n
          </Typography>
          {userInfo?.user.isAdmin ? (
            <>
              <Button
                color="inherit"
                onClick={() => navigator("/admin/players")}
              >
                PLayers
              </Button>
              <Button color="inherit" onClick={logoutHandler}>
                Logout
              </Button>
            </>
          ) : userInfo?.user.isAdmin == false ? (
            <>
              <Button color="inherit" onClick={() => navigator("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={logoutHandler}>
                Logout
              </Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
