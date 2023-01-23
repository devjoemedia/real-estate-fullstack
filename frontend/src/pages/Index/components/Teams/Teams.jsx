import { Avatar, Button, Card, CardContent, Grid, Link } from "@mui/material";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

import Typography from "@mui/material/Typography";
import teamMemOne from "images/profile-1.jpg";
import teamMemTwo from "images/profile-2.jpg";
import teamMemThree from "images/profile-3.jpg";
import { useEffect, useState } from "react";
import loader from "images/loader.svg";
import agentImage from "images/profile-1.jpg";
import axios from "axios";

const Teams = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [filterValue, setFilterValue] = useState("Filter By:");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://jneastate-backend.onrender.com/api/properties");
        setProperties(data?.properties.slice(0, 6));
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setLoading(false);
        setErrMsg("there was a problem loading resources");
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Box py={4}>
      <Typography variant="h4" mb={3} sx={{ textAlign: "left" }}>
        Top Agents
      </Typography>

      {!loading ? (
        <Grid container spacing={2}>
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={4}>
              <Link
                underline="none"
                component={RouterLink}
                to={`/agents/${property._id}`}
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
                      <i className="fas fa-map-marker-alt"></i> company:
                      Devtraco Estate
                    </Typography>

                    <Box mt={2}>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to={`/agents/122`}
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
                        to={`/agents/122`}
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
    </Box>
  );
};

export default Teams;
