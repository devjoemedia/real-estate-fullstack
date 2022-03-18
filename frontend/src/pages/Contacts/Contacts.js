import React from "react";
import ContactForm from "../../components/ContactForm";
import Main from "layout/Main";
import Container from "components/Container";

const Contacts = () => {
  return (
    <Main>
      <Container>
        <ContactForm />
      </Container>
    </Main>
  );
};

export default Contacts;
