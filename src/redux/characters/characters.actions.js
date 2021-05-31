import characterActionTypes from "./characters.types";
import axios from "../helpers/axios-client";

export const fetchCharacterStart = () => ({
  type: characterActionTypes.FETCH_CHARACTER_START,
});

export const fetchCharacterSuccess = (character) => ({
  type: characterActionTypes.FETCH_CHARACTER_SUCCESS,
  payload: character,
});

export const fetchCharacterFailure = (error) => ({
  type: characterActionTypes.FETCH_CHARACTER_FAILURE,
  payload: error,
});

export const fetchCharacterIdStart = () => ({
  type: characterActionTypes.FETCH_CHARACTERID_START,
});

export const fetchCharacterIdSuccess = (character) => ({
  type: characterActionTypes.FETCH_CHARACTERID_SUCCESS,
  payload: character,
});

export const fetchCharacterIdFailure = (error) => ({
  type: characterActionTypes.FETCH_CHARACTERID_FAILURE,
  payload: error,
});

export const searchCharacterStart = () => ({
  type: characterActionTypes.SEARCH_CHARACTER_START,
});

export const searchCharacterSuccess = (character) => ({
  type: characterActionTypes.SEARCH_CHARACTER_SUCCESS,
  payload: character,
});

export const searchCharacterFailure = (error) => ({
  type: characterActionTypes.SEARCH_CHARACTER_FAILURE,
  payload: error,
});

export const fetchCharacters = () => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(fetchCharacterStart());
      try {
        const response = await axios.get("/character");
        const { data } = response;
        console.log(data);
        dispatch(fetchCharacterSuccess(data));
      } catch (error) {
        dispatch(fetchCharacterFailure(error));
        reject(error);
      }
    });
  };
};

export const fetchCharacterId = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(fetchCharacterIdStart());
      try {
        const response = await axios.get(`/character/${id}`);
        if (
          response.status === 200 ||
          response.status === 201 ||
          response.status === 204
        ) {
          const { data } = response;
          dispatch(fetchCharacterIdSuccess(data));
        } else {
          throw response;
        }
        resolve();
      } catch (error) {
        dispatch(fetchCharacterIdFailure(error));
        reject(error);
      }
    });
  };
};

export const searchCharacters = (search) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(searchCharacterStart());
      try {
        const response = await axios.get(`/character/?name=${search}`);
        if (response.status === 200 || response.status === 201) {
          const { data } = response;
          console.log(data);
          dispatch(searchCharacterSuccess(data));
        } else {
          throw response;
        }
        resolve();
      } catch (error) {
        dispatch(searchCharacterFailure(error));
        reject(error);
      }
    });
  };
};
