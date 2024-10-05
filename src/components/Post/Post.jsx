import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { userId, id, title, body } = post;
  const postStyle = {
    border: "2px solid green",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={postStyle}>
      <h4>Post of Id: {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
    </div>
  );
};

export default Post;
