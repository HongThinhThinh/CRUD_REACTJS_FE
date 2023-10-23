import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { api } from "../../api";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
function Edit() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailID: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const { firstName, lastName, emailID } = data;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(id);
      await api.put(`/employees/${id}`, data).then((response) => {
        Swal.fire(
          "Update  Successfully",
          "Update thành công " + data.firstName + "rồi nhen",
          "success"
        );
        navigate("/list");
        console.log("trả về từ phía BE:  " + response.data);
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ background: "aqua", padding: "20px", marginTop: "40px" }}>
      <Form
        method="GET"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            name="firstName"
            placeholder="Enter Name"
            value={firstName}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            name="lastName"
            placeholder="Enter pass"
            value={lastName}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            name="emailID"
            placeholder="Enter userEmail"
            value={emailID}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button type="submit" variant="primary">
            Update Employee
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
}

export default Edit;
