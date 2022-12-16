import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import UserDetails from "./UserDetails";

function Dashboard({ handleSelect }) {
  const { userList, setUserList, admin } = useContext(UserContext);
  const [filterList, setFilterList] = useState(userList);
  const [showDetails, setShowDetails] = useState(false);
  const [search1, setSearch1] = useState(false);
  const [search2, setSearch2] = useState(false);
  const [currUser, setCurrUser] = useState({});

  const navigate = useNavigate();

  const userDetail = (user, idx) => {
    if (admin) {
      setShowDetails(true);
      setCurrUser(user);
      handleSelect(idx);
    }
  };
  const handleDelete = (id) => {
    if (admin) {
      const newList = userList.filter((user) => id !== user.id);
      setUserList(newList);
      setFilterList(newList);
    }
  };

  const statusFilter = (status) => {
    if (status === "All") {
      setFilterList(userList);
    } else {
      const list = [...userList];
      const newList = list.filter((user) => user.status === status);
      setFilterList(newList);
    }
  };
  const userNameFilter = (name) => {
    const list = [...userList];
    const newList = list.filter((user) =>
      user.userName.toLowerCase().includes(name.toLowerCase())
    );
    setFilterList(newList);
  };
  const nameFilter = (name) => {
    const list = [...userList];
    const newList = list.filter((user) =>
      user.firstName.toLowerCase().includes(name.toLowerCase())
    );
    setFilterList(newList);
  };

  const genderFilter = (gender) => {
    const list = [...userList];
    const newList = list.filter((user) => user.gender === gender);
    setFilterList(newList);
  };

  return (
    <div className="w-100 p-3 bg-light">
      <div>
        {admin && (
          <button
            type="button"
            className="btn btn-outline-primary m-2"
            onClick={() => {
              navigate("/create-user");
            }}
          >
            Create New User
          </button>
        )}
        <div>
          <h3 className="m-2">User's Data</h3>

          <div className="col-md-6 m-3">
            <b className="form-label mx-3">Name</b>
            <input
              type="search"
              className="form-control w-50 mx-2"
              onChange={(e) => nameFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="m-4 d-flex gap-3 justify-content-evenly flex-wrap">
          <div
            class="card shadow d-flex align-items-center p-3 cp"
            style={{ width: "14rem", height: "9rem" }}
            onClick={() => statusFilter("All")}
          >
            <img
              src="img/users.jfif"
              class="card-img-top card-image"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">
                {userList.length} {userList.length > 1 ? " Users" : " User"}
              </h4>
            </div>
          </div>
          <div
            class="card shadow d-flex align-items-center p-3 cp"
            style={{ width: "14rem", height: "9rem" }}
            onClick={() => statusFilter("Active")}
          >
            <img
              src="img/active.png"
              class="card-img-top card-image"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">
                {userList.filter((u) => u.status === "Active").length} Active
              </h4>
            </div>
          </div>
          <div
            class="card shadow d-flex align-items-center p-3 cp"
            style={{ width: "14rem", height: "9rem" }}
            onClick={() => statusFilter("Inactive")}
          >
            <img
              src="img/inactive.png"
              class="card-img-top card-image"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">
                {userList.filter((u) => u.status === "Inactive").length}{" "}
                Inactive
              </h4>
            </div>
          </div>

          <div
            class="card shadow d-flex align-items-center p-3 cp"
            style={{ width: "14rem", height: "9rem" }}
            onClick={() => genderFilter("Male")}
          >
            <img src="img/male.png" class="card-img-top card-image" alt="..." />
            <div class="card-body">
              <h4 class="card-text">
                {userList.filter((u) => u.gender === "Male").length}
              </h4>
            </div>
          </div>
          <div
            class="card shadow d-flex align-items-center p-3 cp"
            style={{ width: "14rem", height: "9rem" }}
            onClick={() => genderFilter("Female")}
          >
            <img
              src="img/female.jfif"
              class="card-img-top card-image"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-text">
                {userList.filter((u) => u.gender === "Female").length}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <UserDetails setShowDetails={setShowDetails} user={currUser} />
      )}
      <div className=" tableData  p-4 rounded shadow bg-white">
        <table className="table table-hover table-bordered  m-auto text-wrap">
          <thead className="text-center">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">
                {search1 ? (
                  <div className="d-flex align-items-center">
                    <input
                      type="search"
                      className="form-control w-50"
                      placeholder="Username"
                      onChange={(e) => userNameFilter(e.target.value)}
                    />
                    <i
                      className="fa-solid fa-xmark text-primary ps-2"
                      onClick={() => {
                        setSearch1(false);
                        setFilterList(userList);
                      }}
                    ></i>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Username</span>
                    <i
                      className="fa-sharp fa-solid fa-magnifying-glass cp"
                      onClick={() => setSearch1(true)}
                    ></i>
                  </div>
                )}
              </th>
              <th scope="col">
                {search2 ? (
                  <div className="d-flex align-items-center">
                    <input
                      type="search"
                      className="form-control w-50"
                      placeholder="Name"
                      onChange={(e) => nameFilter(e.target.value)}
                    />
                    <i
                      className="fa-solid fa-xmark text-primary ps-2"
                      onClick={() => {
                        setSearch2(false);
                        setFilterList(userList);
                      }}
                    ></i>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>First Name</span>
                    <i
                      className="fa-sharp fa-solid fa-magnifying-glass cp"
                      onClick={() => setSearch2(true)}
                    ></i>
                  </div>
                )}
              </th>

              <th scope="col">Last Name</th>
              <th scope="col">
                Status
                <select
                  className="border border-0 mx-2"
                  onChange={(e) => statusFilter(e.target.value)}
                >
                  <option className="border border-0" value="All">
                    All
                  </option>
                  <option className="border border-0" value="Active">
                    Active
                  </option>
                  <option className="border border-0" value="Inactive">
                    Inactive
                  </option>
                </select>
              </th>
              {admin && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody className="text-center">
            {filterList.length === 0 && (
              <tr>
                <td colSpan="6" className="w-100">
                  <h3>No Data Found!</h3>
                </td>
              </tr>
            )}
            {filterList.map((user, idx) => {
              return (
                <tr className="align-middle" key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.status}</td>
                  {admin && (
                    <td>
                      <button
                        className="btn btn-info m-2"
                        onClick={() => userDetail(user, idx)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
