import React, { useState } from "react";
import Layout from "../layout";
import { Button, Grid, Typography, Divider, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { logIn } from "../util/api";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async () => {
          let response= await logIn({email_userName:email,
                      password:password
          })
          Cookies.set("token",response.data.token)          
          Cookies.set("userId",response.data.user._id)          
          navigate('/')
  }
  

  return (
    <Layout>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightBlue",
          height: "100vh",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            my: 5,
            px: 5,
            py: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#171616" }}
          >
            LOGIN
          </Typography>
          <TextField
            sx={{ width: "37ch", marginTop: 2 }}
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <TextField
            sx={{ width: "37ch", marginTop: 2 }}
            id="outlined-basic"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />

          <Button sx={{ width: "41ch", marginTop: 4 }} variant="contained" onClick={() => handleSubmit()}>
            Login
          </Button>
          <Divider sx={{ backgroundColor: "#767676", my: 2 }} />

          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Need an account? <Link to="/signUp">SIGNUP</Link>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default LogIn;
