import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import Content from "./Content";
import Filter from "./Filter";
import { getAllBlogPost } from "../util/api";

const Home = () => {
  const [data, setData] = useState();

  const getAllPost = async (data) => {
    let response = await getAllBlogPost(data);
    setData(response.data.document);
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <Layout>
      <Filter getAllPost={getAllPost} />
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          padding: 15,
          gap: 38,
          flexWrap: "wrap",
        }}
      >
        {data &&
          data.map((items) => {
            return <Content data={items} />;
          })}
      </Grid>
    </Layout>
  );
};

export default Home;
