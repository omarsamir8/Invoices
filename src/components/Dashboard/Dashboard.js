import React from "react";
import "./Dashboard.css";
import gift from "../../Assets/gidt3.png";
import lines from "../../Assets/analysis.png";
import lines2 from "../../Assets/Screenshot 2024-07-09 221230.png";
import lines3 from "../../Assets/Screenshot 2024-07-09 221511.png";
import lines4 from "../../Assets/Screenshot 2024-07-09 221721.png";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/BarCharts";
function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboardtitle">
          <h3>Dashboard</h3>
        </div>
        <div className="importantReports">
          <div className="welcom">
            <img src={gift} alt="" />
            <div>
              <h4>Welcom Dr Omar ! </h4>
              <p>Have a nice day doing your work</p>
            </div>
            <div>
              <h3>24 Paitent</h3>
              <p>58.5% of target</p>
            </div>
            <button>View Details</button>
          </div>
          <div className="unitReport">
            <div className="market">
              <div>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <p>+23%</p>
            </div>
            <div style={{ marginLeft: "5px" }}>
              <h3>24 </h3>
              <p style={{ fontSize: "15px" }}>Total Reservation</p>
            </div>
            <div>
              <img src={lines} alt="" />
            </div>
          </div>
          <div className="unitReport">
            <div className="market">
              <div style={{ backgroundColor: "#A1DD70" }}>
                <i style={{ color: "green" }} class="fa-solid fa-user"></i>
              </div>
              <p>+14%</p>
            </div>
            <div style={{ marginLeft: "5px" }}>
              <h3>124 </h3>
              <p style={{ fontSize: "15px" }}>Total Patients</p>
            </div>
            <div>
              <img src={lines2} alt="" />
            </div>
          </div>
          <div className="unitReport">
            <div className="market">
              <div style={{ backgroundColor: "black" }}>
                <i
                  style={{ color: "#96C9F4" }}
                  class="fa-solid fa-boxes-packing"
                ></i>
              </div>
              <p>+5%</p>
            </div>
            <div style={{ marginLeft: "5px" }}>
              <h3>10 </h3>
              <p style={{ fontSize: "15px" }}>Total Packages</p>
            </div>
            <div>
              <img src={lines4} alt="" />
            </div>
          </div>
          <div className="unitReport">
            <div className="market">
              <div style={{ backgroundColor: "#FAFFAF" }}>
                <i
                  style={{ color: "#FFB200" }}
                  class="fa-solid fa-clipboard"
                ></i>
              </div>
              <p>+23%</p>
            </div>
            <div style={{ marginLeft: "5px" }}>
              <h3>12 </h3>
              <p style={{ fontSize: "15px" }}>Total Feedback</p>
            </div>
            <div>
              <img src={lines3} alt="" />
            </div>
          </div>
        </div>
        <div className="anlysiscahrts">
          <div className="Pie">
            <h3>Reservation Status</h3>
            <div
              style={{ position: "relative", width: "200px", margin: "auto" }}
            >
              <PieChart />
            </div>
            <div className="charttype">
              <h5>Done</h5>
              <p>+50</p>
            </div>
            <div className="charttype">
              <h5 className="blue">Cancled</h5>
              <p>+7</p>
            </div>
            <div className="charttype">
              <h5 className="benqi">Not Complete</h5>
              <p>+10</p>
            </div>
          </div>
          <div className="barchart">
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
