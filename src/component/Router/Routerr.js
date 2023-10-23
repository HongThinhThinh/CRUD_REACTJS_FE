import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "../Employee/Edit";
import FormFloatingCustom from "../FormFloatingCustom/FormFloatingCustom";
import UserList from "../UserList/UserList";
import DashBoard from "../DashBoard/DashBoard";
function Routerr() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<FormFloatingCustom></FormFloatingCustom>}
        ></Route>
        <Route exact path="/admin" element={<DashBoard></DashBoard>}></Route>
        <Route exact path="/list" element={<UserList></UserList>}></Route>
        <Route exact path="/employees/:id" element={<Edit></Edit>}></Route>
      </Routes>
    </div>
  );
}

export default Routerr;
