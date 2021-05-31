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

export const filterCharacterStart = () => ({
  type: characterActionTypes.FILTER_CHARACTER_START,
});

export const filterCharacterSuccess = (character) => ({
  type: characterActionTypes.FILTER_CHARACTER_SUCCESS,
  payload: character,
});

export const filterCharacterFailure = (error) => ({
  type: characterActionTypes.FILTER_CHARACTER_FAILURE,
  payload: error,
});

export const fetchEpisodeStart = () => ({
  type: characterActionTypes.FETCH_EPISODE_START,
});

export const fetchEpisodeSuccess = (episode) => ({
  type: characterActionTypes.FETCH_EPISODE_SUCCESS,
  payload: episode,
});

export const fetchEpisodeFailure = (error) => ({
  type: characterActionTypes.FETCH_EPISODE_FAILURE,
  payload: error,
});

export const fetchCharacters = (params = { page: 1 }) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(fetchCharacterStart());
      try {
        const response = await axios.get(`/character/?page=${params.page}`);
        const { data } = response;
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

export const filterCharacters = (filterValue, type) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(filterCharacterStart());
      try {
        const response = await axios.get(
          `/character/?name=&${type}=${filterValue.toLowerCase()}`
        );
        if (response.status === 200 || response.status === 201) {
          const { data } = response;
          dispatch(filterCharacterSuccess(data));
        } else {
          throw response;
        }
        resolve();
      } catch (error) {
        dispatch(filterCharacterFailure(error));
        reject(error);
      }
    });
  };
};

export const fetchEpisode = (url) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(fetchEpisodeStart());
      try {
        const response = await axios.get(
          `${url}`
        );
        if (response.status === 200 || response.status === 201) {
          const { data } = response;
          dispatch(fetchEpisodeSuccess(data));
        } else {
          throw response;
        }
        resolve();
      } catch (error) {
        dispatch(fetchEpisodeFailure(error));
        reject(error);
      }
    });
  };
};
