import { Grid, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import moment from "moment";
import { setTextLength } from "../util";

const Content = ({ data }) => {
  return (
    <Grid
      item
      sx={{
        height: "40vh",
        width: "20vw",
        border: "1px solid",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: "#f2f2f2",
        },
      }}
    >
      <Link
        to={`/postDetail/${data._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          style={{ width: "100%", height: "28vh", objectFit: "cover" }}
          src={`http://localhost:5000/${data.cover}`}
        />
        <Grid sx={{ padding: 1 }}>
          <Typography sx={{ fontWeight: "Bold" }}>
            {setTextLength(data?.title, 35)}
          </Typography>
          <Grid>
            <Typography
              sx={{
                color: "GrayText",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {data.category ? data.category.name : null} &nbsp;
              <AccessTimeIcon />
              &nbsp;
              {moment(data?.createdAt).format("MMM-DD-YYYY")}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};

export default Content;
