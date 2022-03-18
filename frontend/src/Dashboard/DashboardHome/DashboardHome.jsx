import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Container from "components/Container";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { BsBuilding } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";

function createData(name, email, phone, message) {
  return { name, email, phone, message };
}

const rows = [
  createData(
    "John Mason",
    "john@test.com",
    5844455544,
    "Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its"
  ),
  createData(
    "Tylar James",
    "tylar@test.com",
    2444333556,
    "Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its"
  ),
  createData(
    "Jamie Magnusson",
    "jamie@test.com",
    2444333556,
    "Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its"
  ),
  createData(
    "Elon Mask",
    "elon@test.com",
    2444333556,
    "Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its"
  ),
  createData(
    "Mark Greenie",
    "mark@test.com",
    2444333556,
    "Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its"
  ),
];

const DashboardHome = () => {
  return (
    <Container paddingX={"0 !important"} paddingY={"0 !important"}>
      <Typography variant="h5" mb={2}>
        Dashboard
      </Typography>

      {/* Cards */}
      <Grid container spacing={1} textAlign="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "300px", padding: "30px" }}>
            <Typography variant="h5" color="#333">
              <BsBuilding />
            </Typography>
            <Typography variant="h5">1,223 Properties</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "300px", padding: "30px" }}>
            <Typography variant="h5" color="#333">
              <IoIosPeople />
            </Typography>
            <Typography variant="h5">223 Agents</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "300px", padding: "30px" }}>
            <Typography variant="h5" color="#333" style={{ color: "black" }}>
              <GrTransaction />
            </Typography>
            <Typography variant="h5">300 Properties sold</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Table */}
      <Box my={4}>
        <Typography variant="h5">Messages</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Message</TableCell>
                <TableCell align="left">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">
                    {row.message.slice(0, 20) + " ..."}
                  </TableCell>
                  <TableCell align="left">
                    {new Date().toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* New Component*/}
      <Grid container spacing={2} my={4}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ minHeight: "200px", padding: "30px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ minHeight: "200px", padding: "30px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardHome;
