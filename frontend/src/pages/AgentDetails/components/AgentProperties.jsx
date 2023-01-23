import { Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import LazyImage from "components/LazyImage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const AgentProperties = () => {
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get("https://jneastate-backend.onrender.com/api/properties/");

        setProperties(data?.properties?.slice(0, 4));

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);
  return (
    <Box py={3}>
      <Typography variant="h5" py={2}>
        Agent Properties
      </Typography>

      <Grid container spacing={2}>
        {properties?.map((item, index) => (
          <Grid item xs={12} sm={6}>
            <Link
              underline="none"
              component={RouterLink}
              to={`/properties/${item._id}`}
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
                    src: item?.bannerImage,
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
                        {item.name}
                      </Typography>
                      <Typography variant="p" color={"#777"}>
                        <i className="fas fa-map-marker-alt"></i> Accra,Ghana
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
                        $2,333
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#777",
                    }}
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

export default AgentProperties;
