import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

import Contacts from "pages/Contacts";
import About from "pages/About";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Register from "pages/Register";
import IndexPage from "pages/Index";
import PropertyDetails from "pages/PropertyDetails";
import Properties from "pages/Properties";
import Companies from "pages/Companies";
import AgentDetails from "pages/AgentDetails";
import Agents from "pages/Agents";
import CompanyDetails from "pages/CompanyDetails";
import LandDetails from "pages/LandDetails";
import Lands from "pages/Lands";
import PaymentPlan from "pages/PaymentPlan";
import DashboardLayout from "layout/DashboardLayout";
import "./App.css";
import DashboardHome from "Dashboard/DashboardHome";
import Profile from "Dashboard/Profile";
import Messages from "Dashboard/Messages";
import DashboardProperties from "Dashboard/DashboardProperties";
import DashboardAgents from "Dashboard/DashboardAgents";
import Notifications from "Dashboard/Notifications";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* <Route index element={<IndexPage />} /> */}
        <Route path="home" element={<IndexPage />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />

        <Route path="properties" element={<Properties />} />
        <Route path="properties/:id" element={<PropertyDetails />} />

        <Route path="lands" element={<Lands />} />
        <Route path="lands/:id" element={<LandDetails />} />

        <Route path="agents" element={<Agents />} />
        <Route path="agents/:id" element={<AgentDetails />} />

        <Route path="companies" element={<Companies />} />
        <Route path="companies/:id" element={<CompanyDetails />} />

        <Route path="payment-plan" element={<PaymentPlan />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* Dashboard View Routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="properties" element={<DashboardProperties />} />
          <Route path="agents" element={<DashboardAgents />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
