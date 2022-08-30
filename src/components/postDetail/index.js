import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { useParams } from "react-router-dom";
import { getBlog } from "../util/api";
import moment from "moment";

const PostDetail = () => {
  let { id } = useParams();

  const [blogdata, setBlogData] = useState({});

  const getBlogData = async () => {
    let response = await getBlog(id);
    setBlogData(response.data);
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <Layout>
      <Grid>
        <img
          src={`http://localhost:5000/${blogdata.cover}`}
          style={{ width: "100%", height: 400, objectFit: "cover" }}
        />
      </Grid>
      <Grid sx={{ px: 3 }}>
        <Typography sx={{ fontSize: 12, color: "GrayText", mb: 1 }}>
          Category: {blogdata?.category?.name}{" "}
          {moment(blogdata.createdAt).format("MMM-DD-YYYY")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 0.8, color: "#171616" }}
        >
          {blogdata.title}
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            color: "#3f3f3f",
            fontWeight: "bold",
            wordWrap: "break-word",
            mb: 2,
          }}
        >
          {blogdata.shortDescription}
        </Typography>
      </Grid>
    </Layout>
  );
};

export default PostDetail;
