import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import User from "../User/User";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { api } from "../../api";
import Swal from "sweetalert2";
function UserList() {
  const [user, setUser] = useState(User());
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/employees/${id}`).then((response) => {
          console.log(response.data);
          loadUsers();
        });
      }
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await api.get("/employees").then((response) => {
      setUser(response.data);
    });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.emailID}</td>
              <td>
                <div style={{ textAlign: "center" }}>
                  <Button size="sm" type="submit" variant="primary">
                    View
                  </Button>{" "}
                  <Link
                    to={`/employees/${user.id}`}
                    size="sm"
                    type="submit"
                    variant="success"
                  >
                    Edit
                  </Link>{" "}
                  <Button
                    onClick={() => handleDelete(user.id)}
                    size="sm"
                    type="submit"
                    variant="danger"
                  >
                    Delete
                  </Button>{" "}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
