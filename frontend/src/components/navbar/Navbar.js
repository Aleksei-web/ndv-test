import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delete_user } from "../../redux/actions/users";
import { Search } from "../search/Search";

function Navbar() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory()
  const logout = () => {
    dispatch(delete_user());
    window.localStorage.setItem("user", "null");
    history.push('/')
    window.location.reload()
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contacts"
              >
                Contacts
              </Link>
            </li>
            {users === 'null' ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <li className="nav-link active" onClick={logout}>
                  Logout
                </li>
              </li>
            )}
          </ul>
        </div>
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
