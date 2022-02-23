import React from "react";
import ContactForm from "../../components/ContactForm";
import Main from "components/Main";
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
