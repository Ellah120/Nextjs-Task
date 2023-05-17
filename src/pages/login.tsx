import { Grid, TextField, Button, Typography, IconButton } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/userContext";


function Login(){
  const { getUser, user } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
      <Grid container>
        <Typography variant="h6">Welcome {user?.firstName}</Typography>
      </Grid>
  );
}

export default Login