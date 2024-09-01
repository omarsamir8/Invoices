import React, { useEffect, useState } from "react";
import "../styles/AdminPage.css";
import Table from '@mui/material/Table';
import Pagination from '@mui/material/Pagination';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function AdminPage() {
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[cpassword,setcpassword]=useState("");
  const[phone,setphone]=useState("");
  const[gender,setgender]=useState("");
  const[birthdate,setbirthdate]=useState("");
  const[Users,setUsers]=useState([]);
  const[pagenumber,setpagenumber]=useState("1")
  // Create User
  const accessToken=localStorage.getItem("accessToken");
  const refreshToken=localStorage.getItem("refreshToken");
  const createUser = async () => {
    try {
      const response = await fetch(
        `https://invoice-nine-iota.vercel.app/api/admin/create/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            "refresh-token": refreshToken,
          },
          body: JSON.stringify({
           name,
           email,
           password,
           cpassword,
           phone,
           gender,
           birthdate
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success("User Created Successfully", {
          position: "top-center", // استخدم قيمة مباشرة لموقع الرسالة
        });
        console.log("User Created successfully") 
      } else {
       console.log(data.error_Message[0].message);
       toast.error(data.error_Message[0].message, {
        position: "top-center", // استخدم قيمة مباشرة لموقع الرسالة
      });
      }
    } catch (error) {
      console.error("Training creation failed", error);
    }
  };

  // Get All Users
  console.log(pagenumber)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://invoice-nine-iota.vercel.app/api/user/get/users?size=5&page=${pagenumber}&sort=name`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "refresh-token": refreshToken,
            },
          }
        );
        setUsers(response.data.users)
        
      } catch (error) {
        console.error("Error fetching admin info:", error);
      }
    };

    fetchData();
  }, [accessToken, refreshToken,pagenumber]);
  console.log(Users)
  return (
    <>
      <div className="AdminPage">
        <div className='Order-Name'>
        <div className="P-title">
                <h2>Users</h2>
                <p>Sunday,27,Aug 2024</p>
        </div>
        <div style={{marginLeft:"-10px"}} className='P-search'>
                <div style={{display:"flex",gap:"10px"}}>
                <div className='all'>All</div>    
                <div className='all'>Clinets</div>    
                <div className='all'>Manger</div>    
                </div>
                
                <div style={{marginRight:"-10px"}}><input type="text" className="form-control"placeholder="Search By Name,Role or etc"/></div>
        </div>
        <div className="addnew-P">
                            <button
                                style={{ background: "#FF9100", border: "none", outline: "none" }}
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                New User
                            </button>
                            {/* Model Build */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Create New User</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form style={{ display: "flex", width: "100%", gap: "20px", padding: "0",flexWrap:"wrap", }}>
                                                <input
                                                    onChange={(e) => setname(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Name"
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    onChange={(e) => setemail(e.target.value)} // Set the selected file
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter User Email "
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    onChange={(e) => setpassword(e.target.value)}
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter User Password"
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    onChange={(e) => setcpassword(e.target.value)} // Set the selected file
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Confirm User Password "
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    onChange={(e) => setphone(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Phone"
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    onChange={(e) => setgender(e.target.value)} // Set the selected file
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Gender "
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    onChange={(e) => setbirthdate(e.target.value)} // Set the selected file
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter User Gender "
                                                    style={{width:"45%"}}
                                                />
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button  onClick={()=>{createUser()}} type="button" className="btn btn-primary">Create User</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
        <Table style={{textAlign:"center"}} striped bordered hover className="table">
          <thead>
            <tr>
              <th className="doctorInfo" scope="col">
                #ID
              </th>
              <th className="doctorInfo" scope="col">
                Name
              </th>
              <th className="doctorInfo" scope="col">
                Email
              </th>
              <th className="doctorInfo" scope="col">
                Phone
              </th>
              <th className="doctorInfo" scope="col">
                Role
              </th>
              <th className="doctorInfo" scope="col">
                Stauts
              </th>
              <th  className="doctorInfo" scope="col">
                Operations
              </th>
            </tr>
          </thead>
          <tbody> 
            {Users.map((user,index)=>{
              return (
                 <tr key={index}>
                <th className="doctorInfo" scope="row">{index+1}</th>
                <td className="doctorInfo">{user.name}</td>
                <td className="doctorInfo">{user.email}</td>
                <td className="doctorInfo">{user.phone}</td>
                <td className="doctorInfo">{user.role}</td>
                <td className="doctorInfo">Active</td>
                <td><i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-square-pen up"></i></td>
            </tr>
              )
            })}   
          </tbody>
        </Table>
        <div className='P-pagination' >
        <Pagination 
          count={10} 
          onChange={(e, value) => {
            setpagenumber(value); // هنا نقوم بتحديث الحالة بناءً على الرقم المختار
          }} 
          variant="outlined" 
          color="secondary" 
        />
        
        </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default AdminPage;
