import React from "react";
import { Avatar, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ProfileOne from "../images/profile-1.jpg";

const Review = () => {
  return (
    <Box
      p={2}
      sx={{
        marginBottom: "20px",
        borderRadius: "10PX",
        bgcolor: "#fff",
      }}
      maxWidth={"400px"}
      marginX={"auto"}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar src={ProfileOne} sx={{ width: "50px", height: "50px" }} />
        <Box ml={2}>
          <Typography
            component="p"
            sx={{ color: "#222", fontWeight: "bold", fontSize: "18px" }}
          >
            Adam starter
          </Typography>
          <Typography component="p">4.5 *</Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          py={1}
          component="p"
          sx={{ color: "#666", fontSize: "14px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque
          accusamus cum nam consequatur quibusdam reprehenderit repudiandae
          maxime, dolore quis.
        </Typography>
      </Box>
    </Box>
  );
};

export default Review;
