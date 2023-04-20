import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Students from "./Students";

function Add(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [std, setStd] = useState("");
  const [rollNo, setRollNo] = useState("");


  let history = useNavigate();

  const handleSubmit = (event) => {
    props.addMethod("Praveen");
    event.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name;
    let b = age;
    let c = std;
    let d = rollNo;

    props.student.push({ id: uniqueId, name: a, age: b, std: c, rollNo: d });
    history("/");
  };

  

  return (
    <div>
      <Form className="d-grid">
        <Form.Group className="mb-3 formInput " controlId="formName">
          <Form.Control
            className="my-1"
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            placeholder="Enter Std"
            required
            onChange={(e) => setStd(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            placeholder="Enter RollNo"
            required
            onChange={(e) => setRollNo(e.target.value)}
          ></Form.Control>
        <div class="d-flex justify-content-end">
          <button
            onClick={handleSubmit}
            className="btn btn-primary btn-sm mx-1 my-1"
            type="submit"
          >
            Submit
          </button>
          
        </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Add;
