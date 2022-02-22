import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import teamMemOne from "images/profile-1.jpg";
import teamMemTwo from "images/profile-2.jpg";
import teamMemThree from "images/profile-3.jpg";

const Teams = () => {
  return (
    <Box py={4}>
      <Typography variant="h4" mb={3} sx={{ textAlign: "left" }}>
        Our Team
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} mb={2}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "center",
              transition: "all ease-in-out 0.3s",
              "&:hover": { boxShadow: "10px 5px 25px rgba(0,0,0,0.4)" },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={teamMemOne}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="p" p={1} fontSize={"20px"}>
                Project Manager
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} mb={2}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "center",
              transition: "all ease-in-out 0.3s",
              "&:hover": { boxShadow: "10px 5px 25px rgba(0,0,0,0.4)" },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={teamMemTwo}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="p" p={1} fontSize={"20px"}>
                Principal Engineer
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} mb={2}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "center",
              transition: "all ease-in-out 0.3s",
              "&:hover": { boxShadow: "10px 5px 25px rgba(0,0,0,0.4)" },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={teamMemThree}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="p" p={1} fontSize={"20px"}>
                Consulting Architect
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} mb={2}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "center",
              transition: "all ease-in-out 0.3s",
              "&:hover": { boxShadow: "10px 5px 25px rgba(0,0,0,0.4)" },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={teamMemOne}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="p" p={1} fontSize={"20px"}>
                Human Resource Manager
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} mb={2}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "center",
              transition: "all ease-in-out 0.3s",
              "&:hover": { boxShadow: "10px 5px 25px rgba(0,0,0,0.4)" },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={teamMemTwo}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="p" p={1} fontSize={"20px"}>
                Communicating & Marketing Manager
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} mb={2}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "center",
              transition: "all ease-in-out 0.3s",
              "&:hover": { boxShadow: "10px 5px 25px rgba(0,0,0,0.4)" },
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={teamMemThree}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="p" p={1} fontSize={"20px"}>
                Head Of Interior Department
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teams;
