import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SendConfirmation from "./pages/SendConfirmation";
import { ToastContainer } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import VerifyCode from "./pages/VerifyCode";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/SendConfirmation" element={<SendConfirmation />} />
          <Route path="/VerifyCode" element={<VerifyCode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
