import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import EntryService from "../services/entry.service";


const required = (value) => {
  
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const NewEntry = () => {

  const form = useRef();
  const checkBtn = useRef();
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState('')
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);


  let user = JSON.parse(localStorage.user).id
  

  const onChangeDate = (e) => {
    const date = e.target.value;
    setDate(date);
  };

  const onChangeLocation = (e) => {
    const location = e.target.value;
    setLocation(location);
  };

  const onChangeDetails = (e) => {
    const details = e.target.value;
    setDetails(details);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false)
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      EntryService.postEntry(date, location, details, user).then(
        (response) => {
          setMessage(response.data.message)
          setSuccessful(true)
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false)
        }
      );
    } 
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <p>Post a new Travelogue</p>
        <Form onSubmit={handleSubmit} ref={form}>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <Input
              type="text"
              className="form-control"
              name="date"
              value={date}
              onChange={onChangeDate}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <Input
              type="text"
              className="form-control"
              name="location"
              value={location}
              onChange={onChangeLocation}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">Details</label>
            <Input
              type="text"
              className="form-control"
              name="details"
              value={details}
              onChange={onChangeDetails}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block">
              <span>Submit</span>
            </button>
          </div>
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};
export default NewEntry;