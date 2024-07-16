import React from "react";

const Form = () => {
  return (
    <div className="formd">
      <div class="mb-3">
        <h1>Get In Touch</h1>
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          placeholder="NAME"
        />
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          placeholder="EMAIL"
        />
        <input
          type="text"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          placeholder="PHONE"
        />
      </div>
      <div class="mb-3 ">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary">Send Message</button>
      </div>
    </div>
  );
};

export default Form;
