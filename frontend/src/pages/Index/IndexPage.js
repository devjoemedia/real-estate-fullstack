import React from "react";
import Box from "@mui/material/Box";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Listings from "./components/Listings";
import Enquiries from "./components/Enquiries";
import Testimonials from "./components/Testimonials";
import Teams from "./components/Teams";
import ContactForm from "../../components/ContactForm";

const IndexPage = () => {
  return (
    <Box>
      <Hero />
      <Introduction />
      <Listings />
      <Enquiries />
      <Teams />
      <Testimonials />
      <ContactForm />
    </Box>
  );
};

export default IndexPage;
