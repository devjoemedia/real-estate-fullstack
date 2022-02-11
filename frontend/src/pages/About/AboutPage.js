import React from "react";
import Box from "@mui/material/Box";
import Introduction from "./components/Introduction";
import Enquiries from "./components/Enquiries";
import Testimonials from "./components/Testimonials";
import Teams from "./components/Teams";
import ContactForm from "../../components/ContactForm";

const AboutPage = () => {
  return (
    <Box>
      <Introduction />
      <Enquiries />
      <Teams />
      <Testimonials />
      <ContactForm />
    </Box>
  );
};

export default AboutPage;
