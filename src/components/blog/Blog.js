import React, { useEffect } from "react";
import BlogBlock from "./BlogBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Blog() {
  // Here in useEffect i will have to go through all the posts and get them ina ayyasorted by createdAt
  return (
    <Box mt={"3rem"}>
      <Grid container display={"flex"} justifyContent={"center"} spacing={3}>
        {info.blog.map((project, index) => (
          <Grid item key={index}>
            <BlogBlock
              image={project.imageUrl}
              live={project.url}
              title={project.title}
              desc={project.desc}
              createdAt={project.createdAt}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
