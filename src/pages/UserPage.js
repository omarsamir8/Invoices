import React from "react";
import Userimg from '../Assets/avatat.jpg'
import '../styles/Userpage.css'
function UserPage(){
    return (
        <>
        <div style={{padding:"20px 40px"}} className="userpage">
            <div className="P-title">
                    <div style={{display:"flex",gap:"20px",alignItems:"center"}}> 
                        <img style={{width:"40px",borderRadius:"50%"}} src={Userimg} alt=""/> 
                        <h2 className="username">Omar Samir</h2>
                    </div>
                    <p>Sunday,27,Aug 2024</p> 
            </div> 
            <div className="addnew-P">
                            <button
                                style={{ background: "#FF9100", border: "none", outline: "none" }}
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Create Invoice
                            </button>
                            {/* Model Build */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Create New Invoice</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form style={{ display: "flex", width: "100%", gap: "20px", padding: "0",flexWrap:"wrap", }}>
                                                <input
                                                    
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Name"
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter User Email "
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter User Password"
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Confirm User Password "
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                   
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Phone"
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter User Gender "
                                                    style={{width:"45%"}}
                                                />
                                                <input
                                                    
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter User Gender "
                                                    style={{width:"45%"}}
                                                />
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Create Invoice</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
        </div>
        </>
    )
}
export default UserPage;