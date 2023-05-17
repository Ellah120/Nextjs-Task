import { useState, useContext } from "react";
import { UserContext } from "@/context/userContext";
import Image from "next/image";
import { Grid, TextField, Button, Typography, IconButton } from "@mui/material";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";


interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  referralCode: string;
}

function SignUp(){
 const [details, setDetails] = useState<User>({
   firstName: "",
   lastName: "",
   phoneNumber: "",
   email: "",
   password: "",
   confirmPassword: "",
   referralCode: "",
 });
 const [error, setError] = useState<string | null>(null);
 const {saveUser, user} = useContext(UserContext);
 const router = useRouter();

 function handleFirstName(event: any) {
   setDetails({ ...details, firstName: event.target.value });
 }
function handleLastName(event: any) {
  setDetails({ ...details, lastName: event.target.value });
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

const handleSubmit = async (event: any ) => {
  event.preventDefault();
  if (details.password.length <= 6) {
    alert("Password length must be greater than 6");
    return;
  }
  try {
    const response = await axios.post(
        "http://ingleswitch-001-site1.etempurl.com/api/Account/Register",
        details, // Send the details object as the request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    if (response.status === 200) {
      const user: User = response.data;

      saveUser(user);
      router.push("/login");
    } else {
      alert("Authentication failed");
    }
  } catch (error) {
    console.error("Error occurred during sign-in", error);
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
        <form onSubmit={handleSubmit} className={styles.formdiv}>
          <TextField
            label="First Name"
            type="text"
            name="name"
            value={details.firstName}
            onChange={handleFirstName}
            required
            margin="normal"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Last Name"
            type="text"
            name="name"
            value={details.lastName}
            onChange={handleLastName}
            required
            margin="normal"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={details.email}
            onChange={handleEmail}
            required
            margin="normal"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={details.phoneNumber}
            onChange={handlePhoneNumber}
            required
            margin="normal"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={details.password}
            onChange={handlePassword}
            required
            margin="normal"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Confirm Password"
            name="password"
            type="password"
            value={details.confirmPassword}
            onChange={handleConfirmPassword}
            required
            margin="normal"
            variant="outlined"
            className={styles.namediv}
          />
          <TextField
            label="Referral Code"
            name="referral"
            type="number"
            value={details.referralCode}
            onChange={handleReferral}
            margin="normal"
            variant="outlined"
            className={styles.namediv}
          />
          <Button
            type="submit"
            variant="contained"
            className={styles.buttondiv}
          >
            Signup
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
export default SignUp

