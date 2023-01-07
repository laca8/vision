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
export const getPlayerUserRed = (state = { player: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLAYER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PLAYER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        player: payload,
      };
    case PLAYER_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const addPlayerUserRed = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        player: payload,
        success: true,
      };
    case ADD_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listPlayersRed = (state = { players: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        players: payload,
      };
    case LIST_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const PlayerByIdRed = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INFO_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INFO_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        player: payload,
      };
    case INFO_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const updatePlayerRed = (state = { player: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PLAYER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        player: payload,
        success: true,
      };
    case UPDATE_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
