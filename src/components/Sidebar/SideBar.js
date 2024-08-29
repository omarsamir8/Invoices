import React from "react";
import "./SideBar.css";
import logo from "../../Assets/logo.jpg";
function SideBar() {
  return (
    <>
      <div className="sideBar">
        <aside>
          <div className="logo">
            <i class="fa-solid fa-tooth"></i>
            <h2>Maxton</h2>
          </div>
          <div className="branches">
            <div className="branche">
              <i class="fa-solid fa-house"></i>
              <h5>
                <a href="#Dashboard">Dashboard</a>{" "}
              </h5>
            </div>
            <div className="branche">
              <i
                style={{ marginLeft: "2px" }}
                class="fa-solid fa-user-doctor"
              ></i>
              <h5 style={{ marginLeft: "2px" }}>
                <a href="#Dashboard"> Doctors</a>{" "}
              </h5>
            </div>
            <div className="branche">
              <i
                style={{ marginLeft: "2px" }}
                class="fa-solid fa-hospital-user"
              ></i>
              <h5 style={{ marginLeft: "-1px" }}>
                <a href="#Dashboard"> Patients</a>{" "}
              </h5>
            </div>
            <div className="branche">
              <i
                style={{ marginLeft: "2px" }}
                class="fa-solid fa-tower-observation"
              ></i>
              <h5 style={{ marginLeft: "1px" }}>
                <a href="#Dashboard"> Reservation</a>{" "}
              </h5>
            </div>
            <div className="branche">
              <i class="fa-solid fa-handshake-angle"></i>
              <h5>
                <a href="#Dashboard"> Services</a>{" "}
              </h5>
            </div>
            <div className="branche">
              <i
                style={{ marginLeft: "-1px" }}
                class="fa-solid fa-boxes-packing"
              ></i>
              <h5 style={{ marginLeft: "1px" }}>
                <a href="#Dashboard">Packeges</a>{" "}
              </h5>
            </div>
            <div className="branche">
              <i
                style={{ marginLeft: "2px" }}
                class="fa-solid fa-money-bill"
              ></i>
              <h5>
                <a href="#Dashboard">Coupons</a>{" "}
              </h5>
            </div>
            <div className="branche">
              <i
                style={{ marginLeft: "2px" }}
                class="fa-solid fa-money-bill"
              ></i>
              <h5 style={{ marginLeft: "2px" }}>
                <a href="#Dashboard">Feedback</a>{" "}
              </h5>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
export default SideBar;
