import IndexPage from "./pages/Index";
import PropertyDetailsPage from "./pages/PropertyDetails";
import PropertiesPage from "./pages/Properties";
import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/Contacts";
import AboutPage from "./pages/About";
import Box from "@mui/material/Box";
import NotFound from "pages/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="home" element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route index element={<IndexPage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="properties/:id" element={<PropertyDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
