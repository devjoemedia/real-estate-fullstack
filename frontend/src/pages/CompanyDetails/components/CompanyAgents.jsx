import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import agentImage from "images/profile-1.jpg";

const CompanyAgents = () => {
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get("/api/properties/");

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
        Our Agents
      </Typography>

      <Grid container spacing={2}>
        {properties?.map((item, index) => (
          <Grid item xs={12} sm={6}>
            <Link
              underline="none"
              component={RouterLink}
              to={`/agents/${item._id}`}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  margin: " 0 auto",
                  textAlign: "center !important",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <Box>
                  <Avatar
                    src={agentImage}
                    sx={{
                      width: "150px",
                      height: "150px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  alignItems={{ xs: "center" }}
                >
                  <Typography variant="h6" component="p">
                    Tomas Duncan
                  </Typography>
                  <Typography variant="p" color={"#777"}>
                    <i className="fas fa-map-marker-alt"></i> company: Devtraco
                    Estate
                  </Typography>

                  <Box mt={2}>
                    <Link
                      underline="none"
                      component={RouterLink}
                      to={`/agent/122`}
                    >
                      <Button
                        size="small"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginTop: "15px",
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
                        connect
                      </Button>
                    </Link>
                    <Link
                      underline="none"
                      component={RouterLink}
                      to={`/agent/122`}
                    >
                      <Button
                        size="small"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginTop: "15px",
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
                        view profile
                      </Button>
                    </Link>
                  </Box>
                </Box>

                <CardContent>
                  <Box>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        color: "#666",
                      }}
                    >
                      sold (14) properties
                    </Typography>
                  </Box>
                  <Typography variant="p" component="p">
                    Ratings: <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyAgents;
