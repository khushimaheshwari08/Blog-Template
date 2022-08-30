import React from 'react'
import { Grid,Typography,Button } from '@mui/material'
import { Link,useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const Navbar = () => {
  let navigate= useNavigate();
  let token = Cookies.get("token") 

  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('userId')
    window.location.href='/'
  }

  const handleBlog = () => {
    if(token){
      navigate('/createBlog')
    }
    else {
      navigate('/logIn')
    }

  }

  return (
    <Grid sx={{display:"flex", alignItems:"center",justifyContent:"space-between",p:1,my:1,color:"white",backgroundColor:"black" }} >
      <Typography sx={{fontWeight:"bold",fontSize:30,mx:2}}>Blog Site</Typography>
      <Grid sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Link to="/" style={{textDecoration:'none',color:'inherit'}}>
      <Typography sx={{fontWeight:600,p:2}}>Home</Typography>
      </Link>
      {token ? <Button onClick={handleLogout}  sx={{m:2}} variant="contained">Log Out</Button> :<Button onClick={() => {navigate('/logIn')}} sx={{m:2}} variant="contained">Log In</Button> }
      <Button onClick={handleBlog} sx={{m:2}} variant="contained">Create Blog</Button>
      </Grid>
    </Grid>
  )
}

export default Navbar