import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App.js";
import Error from "./Error";

const admin = {
  id: "1",
  firstName: "Admin",
  lastName: "",
  userName: "abcd",
  email: "@admin",
  password: "1234",
  address: "NA",
  gender: "NA",
  status: "Active",
};
function Login() {
  const [adminCheck, setAdminCheck] = useState("");
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setLogin, setAdmin, userList, setCurrentUser } =
    useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userExists = userList.some((x) => {
      if (x.userName === userName && x.password === password) {
        setCurrentUser(x);
        return true;
      }
      return false;
    });
    if (
      userName === admin.userName &&
      password === admin.password &&
      adminCheck === "Admin"
    ) {
      setName("");
      setLogin(true);
      setAdmin(true);
      setCurrentUser(admin);
      navigate("/dashboard");
    } else if (userExists && adminCheck === "User") {
      setName("");
      setLogin(true);
      setAdmin(false);
      navigate("/dashboard");
    } else {
      setError(true);
      setName("");
      setPassword("");
    }
  };
  return (
    <div
      className="d-flex align-items-center flex-column justify-content-center"
      style={{ height: "75vh" }}
    >
      <div className="card text-white bg-dark">
        <div className="card-header ">
          <b>Login as : </b>
          <label
            className="cp mx-2 "
            style={
              adminCheck === "Admin"
                ? { fontWeight: "bold", color: "burlywood" }
                : { color: "white" }
            }
          >
            <input
              type="radio"
              className="m-1"
              name="type"
              onChange={() => setAdminCheck("Admin")}
            />
            Admin
          </label>
          <label
            className="cp mx-2"
            style={
              adminCheck === "User"
                ? { fontWeight: "bold", color: "burlywood" }
                : { color: "white" }
            }
          >
            <input
              className="m-1"
              type="radio"
              name="type"
              onChange={() => setAdminCheck("User")}
            />
            User
          </label>
        </div>
        <div className="card-body">
          {error && (
            <Error>
              Invalid {adminCheck === "Admin" ? "Admin" : "User"} Details
            </Error>
          )}
          <form className="d-flex justify-content-center flex-column align-items-center">
            <div className="mb-3 w-40">
              <input
                type="text"
                className="form-control"
                placeholder="Username- abcd"
                value={userName}
                onChange={(e) => {
                  setError(false);
                  setName(e.target.value);
                }}
              />
            </div>
            <div className=" mb-4 w-40">
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password- 1234"
                value={password}
                onChange={(e) => {
                  setError(false);
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary "
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
