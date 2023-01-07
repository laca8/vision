import {
  PLAYER_USER_FAILED,
  PLAYER_USER_REQUEST,
  PLAYER_USER_SUCCESS,
  ADD_PLAYER_FAILED,
  ADD_PLAYER_REQUEST,
  ADD_PLAYER_SUCCESS,
  LIST_PLAYER_FAILED,
  LIST_PLAYER_REQUEST,
  LIST_PLAYER_SUCCESS,
  INFO_PLAYER_FAILED,
  INFO_PLAYER_REQUEST,
  INFO_PLAYER_SUCCESS,
  UPDATE_PLAYER_FAILED,
  UPDATE_PLAYER_REQUEST,
  UPDATE_PLAYER_SUCCESS,
} from "../type";
import axios from "axios";
export const getPlayerByUser = () => async (dispatch, getState) => {
  dispatch({
    type: PLAYER_USER_REQUEST,
  });
  const {
    loginRed: { userInfo },
  } = getState();
  const config = {
    headers: {
      token: userInfo.token,
    },
  };
  try {
    const res = await axios.get("/api/player/user", config);
    dispatch({
      type: PLAYER_USER_SUCCESS,
      payload: res.data,
    });
    console.log(res);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: PLAYER_USER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addPlayerByUser = (player) => async (dispatch, getState) => {
  dispatch({
    type: ADD_PLAYER_REQUEST,
  });
  const {
    loginRed: { userInfo },
  } = getState();
  const config = {
    headers: {
      "Content-Type": "application/json",
      token: userInfo.token,
    },
  };
  try {
    const res = await axios.post("/api/player", player, config);
    dispatch({
      type: ADD_PLAYER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_PLAYER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const editPlayer = (player) => async (dispatch, getState) => {
  dispatch({
    type: UPDATE_PLAYER_REQUEST,
  });
  const {
    loginRed: { userInfo },
  } = getState();
  const config = {
    headers: {
      "Content-Type": "application/json",
      token: userInfo.token,
    },
  };
  try {
    const res = await axios.put("/api/player", player, config);
    dispatch({
      type: UPDATE_PLAYER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: UPDATE_PLAYER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const getPlayers = () => async (dispatch, getState) => {
  dispatch({
    type: LIST_PLAYER_REQUEST,
  });

  try {
    const res = await axios.get("/api/player");
    dispatch({
      type: LIST_PLAYER_SUCCESS,
      payload: res.data,
    });
    console.log(res);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_PLAYER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const filterPlayers = (position, game) => async (dispatch) => {
  dispatch({
    type: LIST_PLAYER_REQUEST,
  });
  try {
    const res = await axios.get("/api/player");
    let filteredProducts = res.data;

    if (position !== "all" && game !== "all") {
      filteredProducts = res.data.filter(
        (product) => product.position === position && product.game === game
      );
    }
    if (position == "all" && game !== "all") {
      filteredProducts = res.data.filter((product) => product.game === game);
    }
    if (position !== "all" && game == "all") {
      filteredProducts = res.data.filter(
        (product) => product.position === position
      );
    }

    dispatch({
      type: LIST_PLAYER_SUCCESS,
      payload: filteredProducts,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_PLAYER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const getPlayerById = (id) => async (dispatch, getState) => {
  dispatch({
    type: INFO_PLAYER_REQUEST,
  });

  try {
    const res = await axios.get(`/api/player/${id}`);
    dispatch({
      type: INFO_PLAYER_SUCCESS,
      payload: res.data,
    });
    console.log(res);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: INFO_PLAYER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
