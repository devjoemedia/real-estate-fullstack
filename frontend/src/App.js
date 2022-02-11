import Navbar from "./components/Navbar";
import "./App.css";
import IndexPage from "./pages/Index";
import PropertyDetailsPage from "./pages/PropertyDetails";
import PropertiesPage from "./pages/Properties";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/Contacts";
import AboutPage from "./pages/About";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box
    // maxWidth={{ lg: 1236 }}
    // width={1}
    // margin={"0 auto"}
    // paddingX={2}
    // paddingY={{ xs: 4, sm: 6, md: 8 }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="home" element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route index element={<IndexPage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="properties/:id" element={<PropertyDetailsPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
