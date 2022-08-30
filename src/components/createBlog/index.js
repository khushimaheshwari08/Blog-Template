import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { createBlogPost, getAllCategory } from "../util/api";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [categoryList, setCategoryList] = useState(null);
  const [cover, setCover] = useState(null);
  const [title, setTitle] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [shortDesciption, setShortDesciption] = useState("");
  const [category, setCategory] = useState("");

  const Categories = async () => {
    let response = await getAllCategory();
    setCategoryList(response.data.results);
  };

  const handleImageChange = (e) => {
    let file = e.target.files[0];
    setCover(file);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortDescription", shortDesciption);
    formData.append("htmlContent", htmlContent);
    formData.append("category", category);
    formData.append("cover", cover);

    await createBlogPost(formData);

    navigate("/");
  };

  useEffect(() => {
    Categories();
  }, []);

  return (
    <Layout>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          Create Blog
        </Typography>

        <TextField
          sx={{ width: "30%" }}
          id="outlined-basic"
          label="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="htmlContent"
          value={htmlContent}
          onChange={(e) => setHtmlContent(e.target.value)}
          style={{
            width: "30%",
            borderRadius: 5,
            padding: 10,
            fontSize: 15,
            fontFamily: "inherit",
            border: "1px solid rgba(0,0,0,0.2)",
          }}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="shortDescription"
          value={shortDesciption}
          onChange={(e) => setShortDesciption(e.target.value)}
          style={{
            width: "30%",
            borderRadius: 5,
            padding: 10,
            fontSize: 15,
            fontFamily: "inherit",
            border: "1px solid rgba(0,0,0,0.2)",
          }}
        />
        <FormControl sx={{ width: "30%" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categoryList &&
              categoryList.map((items) => {
                return <MenuItem value={items._id}>{items.name}</MenuItem>;
              })}
          </Select>
        </FormControl>
        {cover ? (
          <Grid
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              borderRadius: "5px",
              width: "30%",
            }}
          >
            <img
              src="data:image/png;base64,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"
              height="30"
              width="30"
            />
            cover
            <CancelRoundedIcon
              sx={{ cursor: "pointer" }}
              onClick={() => setCover("")}
            />
          </Grid>
        ) : (
          <Button
            variant="outlined"
            component="label"
            sx={{ alignItems: "center", padding: 1.2, mt: 1, width: "30%" }}
          >
            Upload
            <input
              type="file"
              hidden
              accept="image/*"
              id="contained-button-file"
              onChange={handleImageChange}
            />
          </Button>
        )}
        <Button
          sx={{ my: 2, width: "30%" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Layout>
  );
};

export default CreateBlog;
