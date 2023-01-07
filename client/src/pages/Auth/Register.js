import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action/authAction";
import Error from "../../component/Error";
import Success from "../../component/Success";
import Loader from "../../component/Loader";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";

const Register = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerRed = useSelector((state) => state.registerRed);
  const { error, userInfo, loading, success } = registerRed;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    dispatch(register(data));
  };
  useEffect(() => {
    if (userInfo) {
      navigator("/profile");
    }
  }, [userInfo]);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <h3 className="Auth-form-title">
          <LockIcon fontSize="large" variant="primary" />
        </h3>
        <div className="text-center">
          {error ? (
            <Error error={error} />
          ) : userInfo ? (
            <Success message="Register successed go to profile" />
          ) : null}

          <div className="form-group mt-3">
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control mt-1"
              placeholder="Enter name"
              id="standard-basic"
              label="Name"
              variant="standard"
            />
          </div>
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
            <div className="Auth-form-content">
              Already registered?
              <Link to="/login">
                <span className="link-primary">Sign In</span>
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

export default Register;
