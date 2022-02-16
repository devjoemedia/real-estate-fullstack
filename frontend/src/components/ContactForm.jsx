import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import barnerImage from "images/barnner.jpg";
import LazyImage from "components/LazyImage";

const ContactForm = () => {
  return (
    <Box py={8} sx={{ bgcolor: "#fff" }}>
      <Container maxWidth={"lg"}>
        <Box>
          <Grid container sx={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.2)" }}>
            <Grid item xs={12} sm={6} py={5} px={3} sx={{ bgcolor: "#fff" }}>
              <Box component="form" autoComplete="off" mb={2}>
                <FormControl fullWidth size="small">
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="fullWidth"
                    id="fullWidth"
                  />
                </FormControl>
              </Box>
              <Box component="form" autoComplete="off" mb={2}>
                <FormControl fullWidth size="small">
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="fullWidth"
                    id="fullWidth"
                  />
                </FormControl>
              </Box>
              <Box component="form" autoComplete="off" mb={2}>
                <FormControl fullWidth size="small">
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="fullWidth"
                    id="fullWidth"
                  />
                </FormControl>
              </Box>
              <Box mb={2}>
                <TextareaAutosize
                  maxRows={6}
                  style={{
                    width: "100%",
                    height: "200px",
                    borderColor: "#ccc",
                    outline: "none",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                  placeholder="Enter a message..."
                />
              </Box>
              <Box>
                <Button
                  size="small"
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    padding: "8px 20px",
                    "&:hover": {
                      bgcolor: "#333",
                      color: "#fff",
                    },
                  }}
                >
                  send message
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <LazyImage
                image={{ height: "100%", width: "100%", src: barnerImage }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
