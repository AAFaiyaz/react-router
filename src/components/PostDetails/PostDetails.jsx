import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { userId, id, title, body } = post;
  return (
    <div>
      <h3>Post details about: </h3>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
    </div>
  );
};

export default PostDetails;
