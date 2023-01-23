import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Review from "../../components/Review";
import { useParams } from "react-router-dom";
import axios from "axios";
import numeral from "numeral";
import LazyImage from "components/LazyImage";
import loader from "images/loader.svg";
import Main from "layout/Main";
import Slider from "react-slick";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import Map from "./components/Map";
import RequestInfoForm from "./components/RequestInfoForm";
import SimilarProperties from "./components/SimilarProperties";
import agentImage from "images/profile-1.jpg";

const PropertyDetails = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fullWidth: true,
  };
  const [property, setProperty] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get("https://jneastate-backend.onrender.com/api/properties/" + id);
        setProperty(data.property);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Main>
      <Container
        paddingX="0 !important"
        sx={{ minHeight: "60vh", marginTop: "50px" }}
      >
        {!loading ? (
          <Grid container justify="space-between">
            <Grid item xs={12} sm={8} px={3} mb={5}>
              <Slider {...settings}>
                <LazyImage
                  image={{
                    src: property?.bannerImage,
                    alt: "property",
                    overflow: true,
                  }}
                />
                <LazyImage
                  image={{
                    src: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    alt: "property",
                    overflow: true,
                  }}
                />
                <LazyImage
                  image={{
                    src: "https://images.pexels.com/photos/7031608/pexels-photo-7031608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    alt: "property",
                    overflow: true,
                  }}
                />
              </Slider>
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h4">{property?.name}</Typography>
                  <Typography variant="h5" color="#777">
                    {" "}
                    {property?.location?.city}
                  </Typography>
                </Box>
                <Box>
                  <Typography component="h4">
                    starts from:{" "}
                    <span
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#222",
                      }}
                    >
                      ${numeral(property?.price).format()}
                    </span>
                  </Typography>
                  <Typography>
                    By:{" "}
                    <span
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#222",
                      }}
                    >
                      Arko Properties
                    </span>
                  </Typography>
                </Box>
              </Box>

              <Box
                py={4}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                flexDirection={{ xs: "column", md: "row" }}
              >
                <Box
                  mb={{ xs: 2, md: 3 }}
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  <i
                    className="fas fa-briefcase"
                    style={{
                      marginRight: "20px",
                      background: "rgba(204, 204, 204, 0.6)",
                      color: "#333",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  ></i>
                  <Typography variant="p" component="p">
                    2 Bedrooms
                  </Typography>
                </Box>
                <Box
                  mb={{ xs: 2, md: 3 }}
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  <i
                    className="fas fa-shower"
                    style={{
                      marginRight: "20px",
                      background: "rgba(204, 204, 204, 0.6)",
                      color: "#333",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  ></i>
                  <Typography variant="p" component="p">
                    2 Bathrooms
                  </Typography>
                </Box>
                <Box
                  mb={{ xs: 2, md: 3 }}
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  <i
                    className="far fa-square"
                    style={{
                      marginRight: "20px",
                      background: "rgba(204, 204, 204, 0.6)",
                      color: "#333",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  ></i>
                  <Typography variant="p" component="p">
                    1250 ft
                  </Typography>
                </Box>
                <Box
                  mb={{ xs: 2, md: 3 }}
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  <i
                    className="fas fa-shield-alt"
                    style={{
                      marginRight: "20px",
                      background: "rgba(204, 204, 204, 0.6)",
                      color: "#333",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  ></i>
                  <Typography variant="p" component="p">
                    Highly Secured
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography mb={2.5} sx={{ color: "#666", fontSize: "16px" }}>
                  {property?.description}
                </Typography>
              </Box>

              <Box mt={4}>
                <Button
                  size="small"
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    padding: "8px 20px",
                    marginRight: "10px",
                    "&:hover": {
                      bgcolor: "#333",
                      color: "#fff",
                    },
                  }}
                >
                  Apply now
                </Button>
                <Button
                  size="small"
                  sx={{
                    bgcolor: "#f1f1f1",
                    color: "#444",
                    padding: "8px 20px",
                    transition: "all ease 0.4s",
                    "&:hover": {
                      bgcolor: "#333",
                      color: "#fff",
                    },
                  }}
                >
                  Add to favorites
                </Button>

                <Box py={2}>
                  <Box
                    sx={{
                      bgcolor: "#f1f1f1",
                      padding: "10px",
                      width: "100%",
                      minHeight: "80px",
                    }}
                  >
                    <Map
                      lat={property?.location?.coordinates[0]}
                      lng={property?.location?.coordinates[1]}
                      title="My Marker"
                    />
                  </Box>

                  <Typography variant="h5" my={3}>
                    Leasing Agent
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    flexDirection={{ xs: "column", md: "row" }}
                  >
                    <Avatar
                      src={agentImage}
                      sx={{ width: "120px", height: "120px" }}
                    />

                    <Box
                      ml={3}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="p">
                        Tomas Duncan
                      </Typography>
                      <Typography variant="h6" mb={1}>
                        (+223 545 454 454)
                      </Typography>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to={`/agents/122`}
                      >
                        <Button
                          size="small"
                          sx={{
                            width: { xs: "100%", md: "auto" },
                            bgcolor: "#333",
                            color: "#fff",
                            padding: "8px 20px",
                            marginRight: "10px",
                            "&:hover": {
                              bgcolor: "#333",
                              color: "#fff",
                            },
                          }}
                        >
                          view profile
                        </Button>
                      </Link>
                    </Box>
                  </Box>

                  <Box>
                    <RequestInfoForm />
                  </Box>

                  <Box>
                    <SimilarProperties />
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Reviews */}
            <Grid item xs={12} sm={4}>
              <Box
                bgcolor="#f1f1f1"
                sx={{
                  borderRadius: "10px",
                  padding: "20px",
                  overflowY: "scroll",
                  minHeight: "500px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                  }}
                >
                  <Typography component="p" variant="h4">
                    Reviews
                  </Typography>
                  <Typography component="p">see all</Typography>
                </Box>
                {!property?.reviews.length ? (
                  <Box>
                    <Review />
                    <Review />
                    <Review />
                  </Box>
                ) : (
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" sx={{ marginBottom: "20px" }}>
                      No reviews yet
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        ) : (
          <div
            style={{
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100%",
              textAlign: "center",
            }}
          >
            <img src={loader} alt="loader" />
          </div>
        )}
      </Container>
    </Main>
  );
};

export default PropertyDetails;
