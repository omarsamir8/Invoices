import React, { useEffect, useState } from "react";
import "../styles/AdminPage.css";
import Table from '@mui/material/Table';
import Pagination from '@mui/material/Pagination';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
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
  const [selectedUser, setselectedUser] = useState(null);
  const[searchvalue,setsearchvalue]=useState("")
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
          `https://invoice-nine-iota.vercel.app/api/user/get/users?size=5&page=${pagenumber}&sort=name&search=${searchvalue}`,
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
  }, [accessToken, refreshToken,pagenumber,searchvalue]);
  console.log(Users)

  // Delete User
  const handleDelete = async (UserId) => {
    try {
      const confirmed = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (confirmed.isConfirmed) {
          const response = await fetch(
          `https://invoice-nine-iota.vercel.app/api/admin/delete/user?userId=${UserId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "refresh-token": refreshToken,
            },
          }
        );
        if (response.ok) {
          setUsers((PrevUsers) =>
            PrevUsers.filter((user) => user._id !== UserId)
          );
          console.log(`User with ID ${UserId} deleted successfully.`);
          toast.success("User Deleted Successfully", {
            position: "top-center", // استخدم قيمة مباشرة لموقع الرسالة
          });
        } else {
          console.error(`Failed to delete user with ID ${UserId}.`);
          toast.error("Failed To Delete User", {
            position: "top-center", // استخدم قيمة مباشرة لموقع الرسالة
          });
        }
      }
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  // open Model
  function openUpdateModal(user) {
    setselectedUser(user);
    setname(user.name);
    setphone(user.phone);
    setemail(user.email);
    setgender(user.gender);
    setbirthdate(user.birthdate);
  }
// console.log(name,email,phone,gender,birthdate,select);
  // Update User
  const updateUser = async () => {
    try {
      const response = await fetch(
        `https://invoice-nine-iota.vercel.app/api/admin/update/user?userId=${selectedUser._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            "refresh-token": refreshToken,
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            gender,
            birthdate,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success("User Updated Successfully ", {
          position: "top-center", // استخدم قيمة مباشرة لموقع الرسالة
        });
        // Update the state with the modified student
        setUsers((PrevUsers) =>
          PrevUsers.map((PrevUser) =>
            PrevUser._id === selectedUser._id
              ? {
                  ...PrevUser,
                  name,
                  email,
                  phone,
                  gender,
                  birthdate,
                }
              : PrevUser
          )
        );

        // Clear the selected student and reset input fields
        setselectedUser("");
        setname("");
        setemail("");
        setphone("");
        setbirthdate("");
        setgender("");
      } else {
        toast.error(data.error_Message
            ? data.error_Message[0].message
            : data.message, {
          position: "top-center", // استخدم قيمة مباشرة لموقع الرسالة
        });
        }
    } catch (error) {
      console.error("Update failed", error);
    }
  };
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
                
                <div style={{marginRight:"-10px"}}><input onChange={(e)=>{setsearchvalue(e.target.value)}} type="text" className="form-control"placeholder="Search By Name,Role or etc"/></div>
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
                <td><i onClick={()=>{handleDelete(user._id)}} class="fa-solid fa-trash-can"></i>
                    <div style={{display:"flex" ,alignItems:"center"}}>
                        <button
                                style={{ background: "white", border: "none", outline: "none",padding:"0",marginTop:"-25px",marginLeft:"30px" }}
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal2"
                            >
                                <i onClick={()=>{openUpdateModal(user)}} class="fa-solid fa-square-pen up"></i>
                        </button>
                        {/* Model Build */}
                        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Update User</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form style={{ display: "flex", width: "100%", gap: "20px", padding: "0",flexWrap:"wrap", }}>
                                                <input
                                                    onChange={(e) => setname(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Name"
                                                    value={name}
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    onChange={(e) => setemail(e.target.value)} // Set the selected file
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter User Email "
                                                    style={{width:"45%"}}
                                                    value={email}
                                                />
                                                <input
                                                    onChange={(e) => setphone(e.target.value)}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Phone"
                                                    style={{width:"45%"}}
                                                    value={phone}
                                                />
                                                <input
                                                    onChange={(e) => setgender(e.target.value)} // Set the selected file
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Gender "
                                                    style={{width:"45%"}}
                                                    value={gender}
                                                />
                                                <input
                                                    onChange={(e) => setbirthdate(e.target.value)} // Set the selected file
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter User Gender "
                                                    style={{width:"45%"}}
                                                    value={birthdate}
                                                />
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button onClick={()=>{updateUser()}}  type="button" className="btn btn-primary">Update User</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </td>
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
