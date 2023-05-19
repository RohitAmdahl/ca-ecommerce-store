import React from "react";
import ContactComp from "../components/layout/Contact/Contact";
import Button from "../style/Button";

const Contact = () => {
  return (
    <>
      <div>
        <ContactComp />
      </div>
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
    </>
  );
};

export default Contact;
