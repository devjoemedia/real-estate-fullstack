import { AppBar, Box, Card, Link, MenuItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsBuilding } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const DashboardNav = () => {
  let navigation = [
    { text: "Profile", icon: <CgProfile /> },
    { text: "Properties", icon: <BsBuilding /> },
    { text: "Agents", icon: <IoIosPeople /> },
    { text: "Messages", icon: <RiMessage2Fill /> },
    { text: "Notifications", icon: <MdNotifications /> },
    { text: "Settings", icon: <FiSettings /> },
  ];

  return (
    <AppBar
      position={"sticky"}
      sx={{
        bgcolor: "#333",
        height: "100vh",
      }}
    >
      <Box paddingY={2}>
        <MenuItem>
          <Link
            component={RouterLink}
            to="/dashboard"
            underline="none"
            color={"#fff"}
            paddingY={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            ESLavsita
          </Link>
        </MenuItem>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {/* NavLinks */}
        <Box sx={{ flex: "1" }}>
          <MenuItem>
            <MdDashboard />
            <Link
              component={RouterLink}
              to=""
              underline="none"
              color={"#fff"}
              paddingY={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: "10px",
              }}
            >
              Dashboard
            </Link>
          </MenuItem>

          {navigation.map((item, index) => (
            <MenuItem key={index}>
              {item.icon}
              <Link
                component={RouterLink}
                to={`${item.text.toLowerCase()}`}
                underline="none"
                color={"#fff"}
                paddingY={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                {item.text}
              </Link>
            </MenuItem>
          ))}
        </Box>

        <Box>
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // marginLeft: "10px",
            }}
          >
            <Typography variant="p" component="p" paddingY={1}>
              Joseph Nartey
            </Typography>
            <MdOutlineArrowForwardIos />
          </MenuItem>
        </Box>
      </Box>
    </AppBar>
  );
};

export default DashboardNav;
