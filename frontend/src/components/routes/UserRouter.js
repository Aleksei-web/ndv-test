import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children, ...rest }) => {
  const users = useSelector((state) => state.users);

  return users != 'null' ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default UserRoute;
