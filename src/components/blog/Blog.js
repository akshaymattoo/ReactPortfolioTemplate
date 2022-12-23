import React, { useEffect, useState } from "react";
import BlogBlock from "./BlogBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("inside useEffect");
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch(
        "https://sparkling-bonus-3348.akshaymattoo.workers.dev/"
      );
      // convert the data to json
      const json = await data.json();

      json.data.posts.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
      // set state with the result
      setBlogs(json.data.posts);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  // Here in useEffect i will have to go through all the posts and get them ina ayyasorted by createdAt
  return (
    <Box mt={"3rem"}>
      <Grid container display={"flex"} justifyContent={"center"} spacing={3}>
        {blogs.map((project, index) => (
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
