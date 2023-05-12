import { useState, useContext } from "react";
import { UserContext } from "@/context/userContext";
import Image from "next/image";
import { Grid, TextField, Button, Typography, IconButton } from "@mui/material";
import styles from "../styles/Home.module.css";
import { MailOutline } from "@mui/icons-material";

interface User {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  referralCode: string;
}

function SignUp(){
 const [details, setDetails] = useState<User>({
   fullName: "",
   phoneNumber: "",
   email: "",
   password: "",
   confirmPassword: "",
   referralCode: "",
 });
 const [error, setError] = useState<string | null>(null);
 const {saveUser} = useContext(UserContext);

 function handleFullName(event: any) {
   setDetails({ ...details, fullName: event.target.value });
 }

 function handlePhoneNumber(event: any) {
   setDetails({ ...details, phoneNumber: event.target.value });
 }

function handleEmail(event: any) {
  setDetails({ ...details, email: event.target.value.toLowerCase() });
}

function handlePassword(event: any) {
  setDetails({ ...details, password: event.target.value });
}

function handleConfirmPassword(event: any) {
  setDetails({ ...details, confirmPassword: event.target.value });
}
function handleReferral(event: any) {
  setDetails({ ...details, referralCode: event.target.value });
}

function handleSubmit(event: any, ){
  event.preventDefault()
  if(details.password !== details.confirmPassword){
    setError("Passwords do not match!")
  } 
  else {
    saveUser(details)
  }
}
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={styles.maindiv}
    >
      <Grid item className={styles.subdiv}>
        <Image
          src="/../public/assets/logo.png"
          alt="logo"
          width="200"
          height="40"
        />
        <Typography variant="h6" className={styles.titlediv}>
          Create Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            id="text"
            type="text"
            value={details.fullName}
            onChange={handleFullName}
            required
            margin="none"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Email"
            id="email"
            type="email"
            value={details.email}
            onChange={handleEmail}
            required
            margin="none"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Phone Number"
            id="tel"
            type="tel"
            value={details.phoneNumber}
            onChange={handlePhoneNumber}
            required
            margin="none"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Password"
            id="password"
            type="password"
            value={details.password}
            onChange={handlePassword}
            required
            margin="none"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Confirm Password"
            id="password"
            type="password"
            value={details.confirmPassword}
            onChange={handleConfirmPassword}
            required
            margin="none"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Referral Code"
            id="number"
            type="number"
            value={details.referralCode}
            onChange={handleReferral}
            margin="none"
            variant="outlined"
            className={styles.namediv}
          />
           <Button type="submit" variant="contained" color="primary">Signup</Button>
        </form>
      </Grid>
    </Grid>
  );
}
export default SignUp

