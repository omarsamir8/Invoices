import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [mainerror, setmainerror] = useState("");
  const [isclicked, setisclicked] = useState(true);

  const Login = async () => {
    try {
      setisclicked(!isclicked);
      const response = await fetch(
        `https://invoice-nine-iota.vercel.app/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      localStorage.setItem('accessToken',data.tokens.accessToken)
      localStorage.setItem('refreshToken',data.tokens.refreshToken)
      setmainerror(data.message);
      if (response.ok) {
        toast.success("Login Successfully", {
          position: "top-center", // استخدم قيمة مباشرة لموقع الرسالة
        });
        window.location.href = "/adminpage";
      } else {
        const newErrors = {};
        if (data.validationErrors) {
          data.validationErrors.forEach((error) => {
            newErrors[error.path] = error.message;
          });
        } else {
        }
        setErrors(newErrors);
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error("An error occurred while sending confirmation.", {
        position: "top-center",
      });
    }
  };
  
  const openfromnewdevice = () => {
    if (mainerror === "You are trying to log in from a new device") {
      window.location.href = "/SendConfirmation";
    }
  };
  useEffect(()=>{openfromnewdevice()},[mainerror])
  return (
    <>
      <div className="login">
        <div className="login-title">
          <h2>Login Page</h2>
          <p>Welcome Back!</p>
        </div>
        <div className="login-content">
          <Form>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Form.Control>
            {errors.email && (
              <p style={{ marginTop: "0" }} className="error-message">
                <i class="fa-solid fa-bomb"></i>
                {errors.email}
              </p>
            )}
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Form.Control>
            {errors.password && (
              <p style={{ marginTop: "0" }} className="error-message">
                {" "}
                <i class="fa-solid fa-bomb"></i>
                {errors.password}
              </p>
            )}
            {mainerror && !errors.password && (
              <p style={{ marginTop: "0" }} className="error-message">
                {" "}
                <i class="fa-solid fa-bomb"></i>
                {mainerror}
              </p>
            )}
            <p>
              Do You Have An Account? <a href="/signup">Sign Up</a>{" "}
            </p>
            {mainerror === "you need to confirm your email" && (
              <p
                variant="primary"
                style={{
                  cursor: "pointer",
                  color: "yellow",
                }}
              >
                <a href="/SendConfirmation">
                  {" "}
                  You Want To Recived Another Confirm Email
                </a>
              </p>
            )}
            {isclicked === true && (
              <Button
                variant="primary"
                onClick={() => {
                  Login();
                }}
              >
                Login
              </Button>
            )}
            {isclicked === false && (
              <Button
                style={{ background: "linear-gradient(to right, red, green)" }}
                variant="primary"
                onClick={() => {
                  Login();
                }}
              >
                Login
              </Button>
            )}
          </Form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default Login;
