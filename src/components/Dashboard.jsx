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
    if (gender === "All") {
      setFilterList(userList);
    } else {
      const list = [...filterList];
      const newList = list.filter((user) => user.gender === gender);
      setFilterList(newList);
    }
  };

  return (
    <div className="w-100">
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
          <h3>Filter</h3>
          <form className="row g-3 px-2">
            <div className="col-md-6">
              <b className="form-label mx-3">Name</b>

              <input
                type="email"
                className="form-control w-50 mx-2"
                id="inputEmail4"
                onChange={(e) => nameFilter(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <b className="form-label mx-3">Username</b>
              <input
                type="text"
                className="form-control w-50 mx-2"
                onChange={(e) => userNameFilter(e.target.value)}
              />
            </div>

            {/* <br /> */}

            <div className="col-md-6">
              <b className="mx-3">Status</b>
              <select
                className="form-select w-25 mx-2"
                onChange={(e) => statusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="col-md-6">
              <b className="mx-3">Gender</b>
              <select
                className="form-select w-25 mx-2"
                onChange={(e) => genderFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </form>
        </div>

        <br />
      </div>

      {showDetails && (
        <UserDetails setShowDetails={setShowDetails} user={currUser} />
      )}
      <div className="tableData">
        <table className="table table-hover table-bordered  m-2 text-wrap">
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
