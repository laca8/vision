import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action/authAction";
import Error from "../../component/Error";
import Success from "../../component/Success";
import Loader from "../../component/Loader";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
const Login = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginRed = useSelector((state) => state.loginRed);
  const { error, userInfo, loading, success } = loginRed;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(login(data));
  };
  useEffect(() => {
    if (userInfo) {
      navigator("/profile");
    }
  }, [userInfo]);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            <LockIcon fontSize="large" variant="primary" />
          </h3>

          {error && <Error error={error} />}
          {userInfo && <Success message="Login successed go to profile" />}
          <div className="form-group mt-3">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
          </div>
          <div className="form-group mt-3">
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </div>
          <div className="form-bottom">
            <div className="text-center">
              Not registered yet?
              <Link to="/register">
                <span className="link-primary">Sign Up</span>
              </Link>
            </div>
            <div className="d-grid gap-2 mt-3" onClick={handleSubmit}>
              <Button type="submit">{loading ? <Loader /> : "submit"}</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
