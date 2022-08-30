import React, { useState } from "react";
import { Grid, Typography, Divider, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../layout";
import { signUp } from "../util/api";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const response = await signUp({
      email: email,
      password: password,
      userName: username,
    });
    Cookies.set("token",response.data.token)          
    Cookies.set("userId",response.data.user._id) 
    navigate('/')
  };

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
            SIGNUP
          </Typography>
          <TextField
            sx={{ width: "37ch", marginTop: 2 }}
            id="outlined-basic"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
          />
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
          <Typography>
            <Button
              sx={{ width: "41ch", marginTop: 4 }}
              variant="contained"
              onClick={() => handleSubmit()}
            >
              SIGNUP
            </Button>
            <Divider sx={{ backgroundColor: "#767676", my: 2 }} />
          </Typography>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Already a user? <Link to="/logIn">LOGIN</Link>
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SignUp;
