import React from "react";
import ContactLinks from "../molecules/ContactLinks";
import Container from "../atoms/Container";
import Socials from "../molecules/Socials";

export default function Contact() {
  return (
    <Container>
      <h2>Let's get in touch and work together.</h2>
      <div className="md:flex justify-between items-end">
        <ContactLinks email={"emilyharper@email.com"} tel={"+1 (718) 222-6500"} />
        <Socials/>
      </div>
    </Container>
  );
}
