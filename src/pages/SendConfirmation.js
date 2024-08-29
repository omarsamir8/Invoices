import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SendConfirmation() {
  const [isClicked, setIsClicked] = useState(true);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendConfirm = async () => {
    try {
      setIsClicked(!isClicked);
      const response = await fetch(
        `https://invoice-nine-iota.vercel.app/api/auth/get/sendverifyCode`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Code sent successfully!", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/VerifyCode");
        }, 2000);
      } else {
        if (data.validationErrors) {
          const newErrors = {};
          data.validationErrors.forEach((error) => {
            newErrors[error.path] = error.message;
          });
        } else {
          toast.error("An error occurred while sending confirmation.", {
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
          <h2>Confirmation Page</h2>
          <p>Welcome Back!</p>
        </div>
        <div className="login-content">
          <Form>
            <Form.Control
              type="email"
              placeholder="Enter Your Email Or Phone"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              style={{ marginTop: "20px" }}
              variant="primary"
              onClick={sendConfirm}
            >
              {isClicked ? "Send Code" : "Resend Code"}
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default SendConfirmation;
