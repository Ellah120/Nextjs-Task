import { Grid, TextField, Button, Typography, IconButton } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/userContext";
import UserProvider from "@/context/userContext";

function Login(){
  const { getUser, user } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserProvider>
      <Grid container>
        <Typography variant="h6">Welcome {user?.fullName}</Typography>
      </Grid>
    </UserProvider>
  );
}

export default Login