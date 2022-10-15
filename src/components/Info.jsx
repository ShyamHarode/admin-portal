import { useNavigate } from "react-router-dom";
import "../App.css";

const Info = ({user }) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/dashboard");
  };
 
  return (
    <div className="z">
    <div className="card  m-3 bg-secondary text-white">
      <div className="card-header text-center">User Details</div>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text m-2 p-2">First Name : {user.firstName}</p>
        <p className="card-text m-2 p-2">Last Name : {user.lastName}</p>
        <p className="card-text m-2 p-2">UserName : {user.userName}</p>
        <p className="card-text m-2 p-2">Email : {user.email}</p>
        <p className="card-text m-2 p-2">Password : {user.password}</p>
        <p className="card-text m-2 p-2 text-wrap">Address : {user.address}</p>
        <p className="card-text m-2 p-2">Gender : {user.gender}</p>
        <p className="card-text m-2 p-2">Status : {user.status}</p>

        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
      <div className="card-footer text-muted text-center">
        <button className="btn btn-danger mx-2" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
    </div>
  );
};
export default Info;
