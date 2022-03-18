import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import numeral from "numeral";
import LazyImage from "components/LazyImage";

const Listings = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("api/properties");
        setProperties(data?.properties.slice(0, 3));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    // return () => {};
  }, []);
  return (
    <Box py={2} sx={{ minHeight: "400px" }}>
      <Grid container spacing={2}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property?._id}>
            <Link
              underline="none"
              component={RouterLink}
              to={`/properties/${property._id}`}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "auto",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <LazyImage
                  image={{
                    src: property?.bannerImage,
                    height: "250px",
                    overflow: false,
                  }}
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
                      <Typography variant="h6" component="p">
                        {property.name}
                      </Typography>
                      <Typography variant="p" color={"#777"}>
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {property.location.city}
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
                        ${numeral(property.price).format()}
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
        ))}
      </Grid>
    </Box>
  );
};

export default Listings;
