import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

const DashboardMenu = ({ onClose, open, variant }) => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        <Typography variant="h4">Dashboar</Typography>
      </Box>
    </Drawer>
  );
};

export default DashboardMenu;
