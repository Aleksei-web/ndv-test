import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { add_users_thunk } from "../../redux/actions/users";

function LoginForm() {
  const [email, setEmail] = useState("aleksei@user.com");
  const [password, setPassword] = useState("userpass");

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(add_users_thunk(email, password));
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
