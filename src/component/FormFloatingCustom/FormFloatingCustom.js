import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { api } from "../../api";
import Swal from "sweetalert2";
function FormFloatingCustom() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailID: "",
  });

  const { firstName, lastName, emailID } = data;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/addEmployees", data).then((response) => {
        Swal.fire(
          "Added Successfully",
          "Thêm thành công " + data.firstName + " vào giỏ hàng rồi nhen",
          "success"
        );
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
            Add Employees
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
}

export default FormFloatingCustom;
