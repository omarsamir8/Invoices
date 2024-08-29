import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyCode() {
  const [code, setCode] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const verifycode = async () => {
    try {
      const response = await fetch(
        `https://invoice-nine-iota.vercel.app/api/auth/verify/send/code`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, code }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Verifying Code Done successfully!", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        if (data.validationErrors) {
          const newErrors = {};
          data.validationErrors.forEach((error) => {
            newErrors[error.path] = error.message;
          });
        } else {
          toast.error("An error occurred while Verifying.", {
            position: "top-center",
          });
        }
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Unexpected error occurred", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-title">
          <h2>Verifying Code Page</h2>
          <p>Welcome Back!</p>
        </div>
        <div className="login-content">
          <Form>
            <Form.Control
              type="email"
              placeholder="Enter Your Email "
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <Form.Control
              type="text"
              placeholder="Enter Your Code"
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <Button
              onClick={() => {
                verifycode();
              }}
              style={{ marginTop: "20px" }}
              variant="primary"
            >
              Verify Code
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default VerifyCode;
