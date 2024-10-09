import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Ooops!!!</h2>
      <h3>This is not right</h3>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
