import React from "react";
import ContactForm from "../../components/ContactForm";
import Main from "components/Main";
import Container from "components/Container";

const ContactsPage = () => {
  return (
    <Main>
      <Container>
        <ContactForm />
      </Container>
    </Main>
  );
};

export default ContactsPage;
