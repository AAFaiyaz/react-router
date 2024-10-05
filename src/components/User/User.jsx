import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid green",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show details</Link>
    </div>
  );
};

export default User;
