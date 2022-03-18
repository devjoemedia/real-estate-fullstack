import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Button,
  FormControl,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import numeral from "numeral";
import loader from "images/loader.svg";
import agentImage from "images/profile-1.jpg";

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [filterValue, setFilterValue] = useState("Filter By:");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("api/properties");
        setProperties(data?.properties);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setLoading(false);
        setErrMsg("there was a problem loading resources");
        console.log(err);
      }
    };

    fetchData();
    // return () => {};
  }, []);

  return (
    <Box sx={{ minHeight: "400px" }}>
      <Box
        sx={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 0.95 }}>
          <TextField
            padding={4}
            fullWidth
            placeholder="Search Agents..."
            size="medium"
          />
        </Box>

        <Box sx={{ width: "120px" }}>
          <FormControl fullWidth>
            <Select
              value={filterValue}
              size="small"
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <MenuItem disabled value="Filter By:">
                Filter By:
              </MenuItem>
              <MenuItem value={10}>Top rated</MenuItem>
              <MenuItem value={20}>Low pricing</MenuItem>
              <MenuItem value={30}>High pricing</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {isError && (
        <>
          <h3 style={{ textAlign: "center" }}>{errMsg}</h3>
        </>
      )}

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

export default Listings;
