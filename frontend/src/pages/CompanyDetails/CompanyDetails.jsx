import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Container from "components/Container";
import Main from "layout/Main";
import React from "react";
import ContactAgentForm from "./components/ContactAgentForm";
import agentImage from "images/profile-1.jpg";
import { Link as RouterLink } from "react-router-dom";
import AgentProperties from "./components/AgentProperties";
import CompanyAgents from "./components/CompanyAgents";

const CompanyDetails = () => {
  return (
    <Main bgcolor="#f1f1f1">
      <Container>
        <Box>
          <Grid container justifyContent="space-between" spacing={1}>
            <Grid item xs={12} sm={8}>
              <Box bgcolor="#fff" p={2.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  flexDirection={{ xs: "column", md: "row" }}
                  py={3}
                >
                  <Box
                    mr={3}
                    mb={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      src={agentImage}
                      sx={{ width: "150px", height: "150px" }}
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
                      Devtraco Estate
                    </Typography>
                    <Typography variant="h6">Location: Accra, Ghana</Typography>

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
                          follow
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
                          visit website
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>

                <Divider />
                <Box py={3}>
                  <Typography variant="h5" py={1}>
                    About Our Company
                  </Typography>
                  <Typography variant="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus, repellat amet. Deserunt voluptatibus saepe
                    natus quia molestiae quod soluta optio.
                  </Typography>
                  <br />
                  <Typography variant="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus, repellat amet. Deserunt voluptatibus saepe
                    natus quia molestiae quod soluta optio.
                  </Typography>
                </Box>

                <Box>
                  <CompanyAgents />
                </Box>
                <Divider />
                <Box>
                  <AgentProperties />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box bgcolor="#fff" p={2.5}>
                <ContactAgentForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Main>
  );
};

export default CompanyDetails;
