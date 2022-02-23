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
import Main from "components/Main";
import React from "react";
import ContactAgentForm from "./components/ContactAgentForm";
import agentImage from "images/profile-1.jpg";
import { Link as RouterLink } from "react-router-dom";
import AgentProperties from "./components/AgentProperties";

const Agent = () => {
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
                  >
                    <Typography variant="p">Tomas Duncan</Typography>
                    <Typography variant="p">(+223 545 454 454)</Typography>
                    <Typography variant="p">Tomas Duncan</Typography>
                    <Typography variant="p">(+223 545 454 454)</Typography>

                    <Box mt={2}>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to={`/agent/122`}
                      >
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
                          view profile
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
                    About Agent
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

export default Agent;
