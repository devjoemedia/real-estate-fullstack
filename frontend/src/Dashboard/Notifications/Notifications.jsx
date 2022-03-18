import {
  Box,
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

const Notifications = () => {
  return (
    <Container paddingX={"0 !important"} paddingY={"0 !important"}>
      <Typography variant="h4">Notifications</Typography>
      <Box my={4}>
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
    </Container>
  );
};

export default Notifications;
