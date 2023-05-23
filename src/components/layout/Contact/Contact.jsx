import React from "react";
import ContactDiv from "../../../style/contactDiv";
import Button from "../../../style/Button";
const Contact = () => {
  const SRC = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.2179771991125!2d10.747543591164234!3d59.91192968289726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8a1c253d39%3A0x6d69efbe96e850d2!2sOslo%20Central%20Station!5e0!3m2!1sen!2sno!4v1683930960946!5m2!1sen!2sno`;
  return (
    <>
      <div className="contact">
        <h2 className="heading">Contact</h2>
      </div>

      <ContactDiv>
        <iframe title="map" src={SRC}></iframe>

        <div className="Contact-form">
          <form>
            <div className="form-div">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-div">
              <label htmlFor="Subject">Subject</label>
              <input type="text" name="subject" id="subject" required />
            </div>
            <div className="form-div">
              <label htmlFor="Email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-div">
              <label htmlFor="body">Body</label>
              <input type="text" />
            </div>
            <div className="form-div">
              <Button type="Submit">Send</Button>
            </div>
          </form>
        </div>
      </ContactDiv>
    </>
  );
};

export default Contact;
