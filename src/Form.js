import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Form = () => {
  const validDate = { name: "", email: "", password: "" };
  const [data, setData] = useState(validDate);
  const [errdata, seErrtData] = useState(validDate);
  const handleChahge = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  let m = {};
  const handleSend = (e) => {
    e.preventDefault();

    seErrtData(validFunc(data));

		if(validFunc(data).isTrue === true) {
			console.log(data);
		}
  };

  useEffect(() => {}, [errdata]);

  const validFunc = (value) => {
    let errors = {};
    const patern = /^[^\s@]+@[^\s@]+\.[^\s]{2,}$/i;
    if (!value.name) {
      errors = { ...errors, isTrue: false, name: "name is requied" };
    } else if (value.name.length < 5) {
      errors = { ...errors, isTrue: false, name: "name is min length 5" };
    } else {
      errors = { ...errors, isTrue: true, name: "" };
    }
    if (!value.email) {
      errors = { ...errors, isTrue: false, email: "email is requied" };
    } else if (patern.test(value.email)) {
      errors = { ...errors, isTrue: false, email: "email is not format!" };
    } else {
      errors = { ...errors, isTrue: true, email: "" };
    }
    if (!value.password) {
      errors = { ...errors, isTrue: false, password: "password is requied" };
    } else if (value.password.length < 8) {
      errors = { ...errors, isTrue: false, password: "password need 8 leters" };
    } else {
      errors = { ...errors, isTrue: true, password: "" };
    }
		return errors;
  };

  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSend}>
          <h1>register validation</h1>
          <div className="input_group">
            <label htmlFor="name">name</label>
            <input
              onChange={handleChahge}
              value={data.name}
              type="text"
              id="name"
              placeholder="name"
              name="name"
            />
            <span>{errdata?.name}</span>
          </div>
          <div className="input_group">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              placeholder="email"
              onChange={handleChahge}
              value={data.email}
              name="email"
            />
            <span>{errdata?.email}</span>
          </div>
          <div className="input_group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={data.password}
              onChange={handleChahge}
              name="password"
            />
            <span>{errdata?.password}</span>
          </div>
          <div className="input_group">
            <Button type="submit" variant="contained" color="success">
              submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
