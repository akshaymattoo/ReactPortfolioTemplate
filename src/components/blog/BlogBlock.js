import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function BlogBlock(props) {
  const { image, live, title, desc, createdAt } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {new Date(createdAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={live} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogBlock;
