import React, { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDeefault();
    alert(
      `Thank you My name is${data.fullname}. My mobile number is ${data.phone} and email is ${data.email} and here is wat i want to say ${data.message} We will get back to your soon.`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 ma-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="Number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Your mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="number"
                  value={data.message}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
