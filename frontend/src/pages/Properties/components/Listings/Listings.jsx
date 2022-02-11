import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Listings = () => {
  return (
    <Box py={6}>
      <Container>
        <Typography variant="h3" sx={{ textAlign: "center" }} mb={2}>
          Top Listings
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Link underline="none" component={RouterLink} to={`/properties/1`}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Box
                    paddingBottom={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box component="div">
                      <Typography variant="h5">Love Birds</Typography>
                      <Typography variant="p" color={"#777"}>
                        <i class="fas fa-map-marker-alt"></i> Accra, Ghana
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#222",
                        }}
                      >
                        $2500
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#777",
                    }}
                    // flexDirection:{{ md: "columns" }}
                  >
                    <Box component="div">
                      <i className="fas fa-briefcase"></i>
                      <Typography variant="p" component="p">
                        2 Bedrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="fas fa-shower"></i>
                      <Typography variant="p" component="p">
                        2 Bathrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="far fa-square"></i>
                      <Typography variant="p" component="p">
                        1250 ft
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link underline="none" component={RouterLink} to={`/properties/1`}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Box
                    paddingBottom={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box component="div">
                      <Typography variant="h5">Motion Plaza</Typography>
                      <Typography variant="p" color={"#777"}>
                        <i class="fas fa-map-marker-alt"></i> Accra, Ghana
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#222",
                        }}
                      >
                        $2500
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#777",
                    }}
                    // flexDirection:{{ md: "columns" }}
                  >
                    <Box component="div">
                      <i className="fas fa-briefcase"></i>
                      <Typography variant="p" component="p">
                        2 Bedrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="fas fa-shower"></i>
                      <Typography variant="p" component="p">
                        2 Bathrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="far fa-square"></i>
                      <Typography variant="p" component="p">
                        1250 ft
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link underline="none" component={RouterLink} to={`/properties/1`}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Box
                    paddingBottom={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box component="div">
                      <Typography variant="h5">Villa Park</Typography>
                      <Typography variant="p" color={"#777"}>
                        <i class="fas fa-map-marker-alt"></i> Accra, Ghana
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#222",
                        }}
                      >
                        $2500
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#777",
                    }}
                    // flexDirection:{{ md: "columns" }}
                  >
                    <Box component="div">
                      <i className="fas fa-briefcase"></i>
                      <Typography variant="p" component="p">
                        2 Bedrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="fas fa-shower"></i>
                      <Typography variant="p" component="p">
                        2 Bathrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="far fa-square"></i>
                      <Typography variant="p" component="p">
                        1250 ft
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link underline="none" component={RouterLink} to={`/properties/1`}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Box
                    paddingBottom={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box component="div">
                      <Typography variant="h5">AirPort City</Typography>
                      <Typography variant="p" color={"#777"}>
                        <i class="fas fa-map-marker-alt"></i> Accra, Ghana
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#222",
                        }}
                      >
                        $2500
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#777",
                    }}
                    // flexDirection:{{ md: "columns" }}
                  >
                    <Box component="div">
                      <i className="fas fa-briefcase"></i>
                      <Typography variant="p" component="p">
                        2 Bedrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="fas fa-shower"></i>
                      <Typography variant="p" component="p">
                        2 Bathrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="far fa-square"></i>
                      <Typography variant="p" component="p">
                        1250 ft
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link underline="none" component={RouterLink} to={`/properties/1`}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Box
                    paddingBottom={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box component="div">
                      <Typography variant="h5">Oasis Psalms</Typography>
                      <Typography variant="p" color={"#777"}>
                        <i class="fas fa-map-marker-alt"></i> Accra, Ghana
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#222",
                        }}
                      >
                        $2500
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#777",
                    }}
                    // flexDirection:{{ md: "columns" }}
                  >
                    <Box component="div">
                      <i className="fas fa-briefcase"></i>
                      <Typography variant="p" component="p">
                        2 Bedrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="fas fa-shower"></i>
                      <Typography variant="p" component="p">
                        2 Bathrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="far fa-square"></i>
                      <Typography variant="p" component="p">
                        1250 ft
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Link underline="none" component={RouterLink} to={`/properties/1`}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706"
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Box
                    paddingBottom={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box component="div">
                      <Typography variant="h5">Aqua Safari</Typography>
                      <Typography variant="p" color={"#777"}>
                        <i class="fas fa-map-marker-alt"></i> Accra, Ghana
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#222",
                        }}
                      >
                        $2500
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#777",
                    }}
                    // flexDirection:{{ md: "columns" }}
                  >
                    <Box component="div">
                      <i className="fas fa-briefcase"></i>
                      <Typography variant="p" component="p">
                        2 Bedrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="fas fa-shower"></i>
                      <Typography variant="p" component="p">
                        2 Bathrooms
                      </Typography>
                    </Box>
                    <Box component="div">
                      <i className="far fa-square"></i>
                      <Typography variant="p" component="p">
                        1250 ft
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Listings;
