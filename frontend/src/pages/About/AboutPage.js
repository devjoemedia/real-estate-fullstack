import React from "react";
import Introduction from "./components/Introduction";
import Enquiries from "./components/Enquiries";
import Testimonials from "./components/Testimonials";
import Teams from "./components/Teams";
import ContactForm from "components/ContactForm";
import Container from "components/Container";
import Main from "components/Main";

const AboutPage = () => {
  return (
    <Main>
      <Container
        maxWidth={{ xl: 1236 }}
        paddingY={"0 !important"}
        paddingX={"0 !important"}
      >
        <Introduction />
      </Container>
      <Container
        maxWidth={{ xl: 1236 }}
        paddingX={"0 !important"}
        bgcolor={"#f1f1f1"}
      >
        <Enquiries />
      </Container>
      <Container>
        <Teams />
      </Container>
      <Container maxWidth={{ xl: 1236 }} bgcolor={"#f1f1f1"}>
        <Testimonials />
      </Container>
      <Container paddingX={"0 !important"} maxWidth={{ md: "lg" }}>
        <ContactForm />
      </Container>
    </Main>
  );
};

export default AboutPage;
