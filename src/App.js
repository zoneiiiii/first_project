import "./App.css";
import { useState } from "react";

import Admin from "./Final/admin_Main";
import Search from "./Final/Search/search";
import Login from "./Login/Login";
import Find_id from "./Login/find_id";
import Find_pw from "./Login/find_pw";
import Update from "./member_update/Update";
import UpdateForm from "./member_update/UpdateForm";
import SignUp from "./SignUp/SignUp";
import Final_Main from "./Final/Final_Main";
import Login_Main from "./Final/Login_Main";
import Write from "./Write/Write";
import Write_admin from "./Write/Write_admin";
import Detail from "./Detail/Detail";
import Detail_log from "./Detail/Detail_login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [member, setMember] = useState({
    id: "",
    password: "",
    name: "",
    phone: "",
  });
  const SetID = (ID) => {
    console.log(ID);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Final_Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/update" element={<Update />} />
          <Route path="/mem_up" element={<UpdateForm />} />
          <Route path="/find_pw" element={<Find_pw />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/find_id" element={<Find_id />} />
          <Route path="/find_pw" element={<Find_pw />} />
          <Route path="/Login" element={<Login propFunction={SetID} />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Write_admin" element={<Write_admin />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/home/Detail" element={<Detail_log />} />
          <Route path="/Admin/Detail" element={<Detail_log />} />
          <Route path="/home" element={<Login_Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
