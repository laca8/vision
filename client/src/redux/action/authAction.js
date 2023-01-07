import axios from "axios";
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_LOGOUT,
} from "../type";
export const register = (user) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/users/register", user, config);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: USER_REGISTER_FAILED,
      payload:
        err.response && err.response.data.msg
          ? err.response.data.msg
          : err.response,
    });
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/users/login", user, config);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("userInfo", JSON.stringify(res.data));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        err.response && err.response.data.msg
          ? err.response.data.msg
          : err.response,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
  localStorage.removeItem("userInfo");
};
