import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import Container from "components/Container";
import { Sidebar, Footer } from "./components";

import { Avatar, Button, MenuItem, useTheme } from "@mui/material";

const Main = ({ children, colorInvert = false, bgcolor }) => {
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

  const navPages = [
    "Properties",
    "For sell",
    "For rent",
    "Companies",
    "Agents",
  ];

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <Box bgcolor={bgcolor ? bgcolor : "transparent"}>
      <AppBar
        position={"sticky"}
        sx={{
          top: 0,
          backgroundColor: "#333",
        }}
      >
        <Container paddingY={"2px !important"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={1}
            paddingY={2}
          >
            <MenuItem>
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                color={"#fff"}
                sx={{ display: "flex", alignItems: "center" }}
              >
                ESLavsita
              </Link>
            </MenuItem>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              alignItems={"center"}
            >
              {navPages.map((title, index) => (
                <MenuItem key={index}>
                  <Link
                    underline="none"
                    component={RouterLink}
                    to={`/${title.toLocaleLowerCase().split(" ").join("-")}`}
                    color={"#fff"}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {title}
                  </Link>
                </MenuItem>
              ))}

              <Box marginLeft={4}>
                <Link component={RouterLink} to="/login" underline="none">
                  <Button variant="contained" color="primary" size="medium">
                    Login
                  </Button>
                </Link>
              </Box>
              <Box marginLeft={4}>
                <Link component={RouterLink} to="/register" underline="none">
                  <Button variant="contained" color="primary" size="medium">
                    Register
                  </Button>
                </Link>
              </Box>
              {/* <Box marginLeft={4}>
                <Link component={RouterLink} to="register" underline="none">
                  <Avatar sx={{ width: "50px", height: "50px" }} />
                  Jane Doe
                </Link>
              </Box> */}
            </Box>

            <Box
              sx={{ display: { xs: "block", md: "none" } }}
              alignItems={"center"}
            >
              <Button
                onClick={() => handleSidebarOpen()}
                aria-label="Menu"
                variant={"outlined"}
                sx={{
                  borderRadius: 2,
                  minWidth: "auto",
                  padding: 1,
                }}
              >
                <MenuIcon />
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />

      <main>
        {children}
        <Divider />
      </main>

      <Container
        maxWidth={{ xl: 1236 }}
        paddingX={"0 !important"}
        paddingY={"0 !important"}
        bgcolor={"#333"}
      >
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
