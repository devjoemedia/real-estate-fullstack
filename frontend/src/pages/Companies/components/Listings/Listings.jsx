import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  FormLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import numeral from "numeral";
import LazyImage from "components/LazyImage";
import loader from "images/loader.svg";

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
            placeholder="Search Companies"
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
                to={`/companies/${property._id}`}
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
                          Devtraco Estate
                        </Typography>
                        <Typography variant="p" color={"#777"}>
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {property.location.city}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          component="p"
                          sx={{
                            color: "#666",
                          }}
                        >
                          14 properties
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
                      <Typography variant="p" component="p">
                        Ratings: <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
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
