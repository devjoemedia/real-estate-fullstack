import IndexPage from "./pages/Index";
import PropertyDetails from "./pages/PropertyDetails";
import Properties from "./pages/Properties";
import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Box from "@mui/material/Box";
import NotFound from "pages/NotFound";
import Agent from "pages/Agent";
import Login from "pages/Login";
import Register from "pages/Register";

import "./App.css";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="home" element={<IndexPage />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route index element={<IndexPage />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/:id" element={<PropertyDetails />} />
        <Route path="agent/:id" element={<Agent />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
