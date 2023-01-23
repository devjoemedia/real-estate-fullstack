import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { FormControl, Link, MenuItem, Select, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import numeral from "numeral";
import LazyImage from "components/LazyImage";
import loader from "images/loader.svg";
import landOne from "images/land1.jpg";
// import landTwo from "images/land2.jpg";
// import landThree from "images/landThree.jpg";
// import landFour from "images/landFour.jpg";
// import landFive from "images/landFive.jpg";
// import landSix from "images/landSix.jpg";

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
        const { data } = await axios.get("https://jneastate-backend.onrender.com/api/properties");
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
            placeholder="Search properties"
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
                to={`/lands/${property._id}`}
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
                      src: landOne,
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
                          2 plot / 80*90e
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
                        // display: "flex",
                        // justifyContent: "space-between",
                        color: "#777",
                      }}
                      // flexDirection:{{ md: "columns" }}
                    >
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#222",
                        }}
                      >
                        Devtraco Properties
                      </Typography>
                    </Box>
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
