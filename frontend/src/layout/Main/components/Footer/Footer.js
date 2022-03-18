import React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Link, List, ListItem, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const pages = [
    {
      groupTitle: "About",
      pages: [
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Features",
          href: "/features",
        },
        {
          title: "News & Blog",
          href: "/blog",
        },
      ],
    },
    {
      groupTitle: "Company",
      pages: [
        {
          title: "How We Work?",
          href: "/how-we-work",
        },
        {
          title: "Capital",
          href: "/capital",
        },
        {
          title: "Security",
          href: "/security",
        },
      ],
    },
    {
      groupTitle: "Support",
      pages: [
        {
          title: "FAQs",
          href: "/faqs",
        },
        {
          title: "Support Center",
          href: "/support",
        },
        {
          title: "Contact us",
          href: "/contacts",
        },
      ],
    },
    {
      groupTitle: "Privacy",
      pages: [
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          title: "Terms & Agreement",
          href: "/terms-agreement",
        },
      ],
    },
  ];

  return (
    <Box
      position="static"
      bottom="0"
      sx={{
        paddingY: 6,
        maxWidth: "lg",
        margin: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              padding: "20px",
              color: "white",
            }}
          >
            EstateLavista ©2020
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} alignItems="right">
          <Grid container spacing={0}>
            {pages.map((page, index) => (
              <Grid item key={index}>
                <List>
                  <ListItem>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        color: "white",
                      }}
                    >
                      {page.groupTitle}
                    </Typography>
                  </ListItem>

                  {page.pages.map((item, index) => (
                    <MenuItem key={index}>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to={item.href}
                        color={"#f1f1f1"}
                        sx={{ textAlign: "left" }}
                      >
                        {item.title}
                      </Link>
                    </MenuItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
