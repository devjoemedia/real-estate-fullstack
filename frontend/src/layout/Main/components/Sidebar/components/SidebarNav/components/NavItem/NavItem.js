import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NavItem = ({ title, items }) => {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "");
  }, []);

  const hasActiveLink = () => items?.find((i) => i.href === activeLink);

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: "transparent" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography
            fontWeight={hasActiveLink() ? 600 : 400}
            color={hasActiveLink() ? "primary" : "text.primary"}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {items?.map((p, i) => (
              <MenuItem
                key={i}
                sx={{
                  justifyContent: "flex-start",
                  color: activeLink === p.href ? "blue" : "#555",
                  backgroundColor:
                    activeLink === p.href ? "#555" : "transparent",
                  fontWeight: activeLink === p.href ? 600 : 400,
                }}
              >
                <Link
                  underline="none"
                  component={RouterLink}
                  to={p.href}
                  color="#888"
                  sx={{ textAlign: "left" }}
                >
                  {p.title}
                </Link>
              </MenuItem>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default NavItem;
