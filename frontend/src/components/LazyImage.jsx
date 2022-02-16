import { Box } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({ image }) => (
  <Box
    height={image?.height ? image?.height : "400px"}
    width="100%"
    alt="green iguana"
    sx={{
      borderRadius: "10px",
      overflow: `${image.overflow ? "hidden" : "none"}`,
    }}
  >
    <LazyLoadImage
      alt={image.alt ? image.alt : "loading..."}
      height={image?.height ? image?.height : "400px"}
      effect="blur"
      src={image?.src}
      width={image?.width ? image?.width : "100%"}
    />
  </Box>
);

export default LazyImage;
