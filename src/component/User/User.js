import { useEffect, useState } from "react";
import { api } from "../../api";

function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("/employees").then((response) => {
      setData(response.data);
    });
  }, []);
  return data;
}

export default User;
