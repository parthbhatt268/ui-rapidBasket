import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function ErrorNotification(props) {
  return (
    <>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {props.message}
        </Alert>
    </>
  );
}

export default ErrorNotification;
