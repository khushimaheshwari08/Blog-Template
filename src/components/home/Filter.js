import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Filter = ({ getAllPost }) => {
  const [search, setSearch] = useState();

  return (
    <Grid>
      <Grid
        sx={{
          my: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "50%" }}
          id="outlined-basic"
          label="Search for...."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          sx={{ p: 2 }}
          variant="contained"
          onClick={() => getAllPost(search)}
        >
          <SearchIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
