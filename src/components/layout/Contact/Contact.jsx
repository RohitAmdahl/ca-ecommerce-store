import React from "react";
import ContactDiv from "../../../style/contactDiv";

const Contact = () => {
  const SRC = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.2179771991125!2d10.747543591164234!3d59.91192968289726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8a1c253d39%3A0x6d69efbe96e850d2!2sOslo%20Central%20Station!5e0!3m2!1sen!2sno!4v1683930960946!5m2!1sen!2sno`;
  return (
    <>
      <h2 className="heading">Contact</h2>
      <ContactDiv>
        <iframe title="map" src={SRC}></iframe>
      </ContactDiv>
    </>
  );
};

export default Contact;
