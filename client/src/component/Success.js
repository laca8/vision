import React from "react";
import Alert from "@mui/material/Alert";
const Success = ({ message }) => {
  return (
    <Alert variant="filled" severity="success">
      {message}
    </Alert>
  );
};

export default Success;
