import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import About from "./components/About";
import { createContext, useState, useEffect } from "react";
import "./App.css";

export const UserContext = createContext(null);

function App() {
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [userList, setUserList] = useState(() => {
    return JSON.parse(localStorage.getItem("userList")) || [];
  });
  const [selectedUser, setSelectedUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const [index, setIndex] = useState(0);

  const user = {
    login,
    setLogin,
    userList,
    setUserList,
    admin,
    setAdmin,
    currentUser,
    setCurrentUser,
  };

  const handleSelect = (idx) => {
    setIndex(idx);
    const user = userList[idx];
    setSelectedUser(user);
  };
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={user}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                login ? (
                  <Dashboard handleSelect={handleSelect} />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />
            <Route
              path="/create-user"
              element={(!login || admin) && <CreateUser setLogin={setLogin} />}
            />
            <Route
              path="/update-user"
              element={
                login && admin ? (
                  <UpdateUser selectedUser={selectedUser} index={index} />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />
            <Route
              path="/info"
              element={
                login ? (
                  <Info user={currentUser} />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </UserContext.Provider>
        <div className="icons">
          <a href="https://www.facebook.com/shyamharode5">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/ShyamHarode5">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://github.com/ShyamHarode">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/shyamharode/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
