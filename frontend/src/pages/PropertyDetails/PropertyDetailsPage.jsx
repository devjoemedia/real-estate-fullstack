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

const PropertyDetailsPage = () => {
  const [property, setProperty] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/properties/" + id);
        setProperty(data.property);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Box py={4}>
      <Container maxWidth="lg">
        <Grid container justify="space-between">
          <Grid item xs={12} sm={8} px={3} mb={5}>
            <Box
              component="img"
              height="400px"
              width="100%"
              src={property?.bannerImage}
              alt="green iguana"
              sx={{ borderRadius: "10px" }}
            />
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
              </Box>
            </Box>

            <Box
              py={4}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              // flexDirection:{{ md: "columns" }}
            >
              <Box
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
                Book now
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
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              bgcolor: "#f1f1f1",
              borderRadius: "10px",
              padding: "20px",
              overflowY: "scroll",
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
            <Box>
              <Review />
              <Review />
              <Review />
              <Review />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyDetailsPage;
