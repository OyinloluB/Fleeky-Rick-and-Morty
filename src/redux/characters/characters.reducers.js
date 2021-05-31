import characterActionTypes from "./characters.types";

const initialState = {
  characters: [],
  loading: false,
  error: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case characterActionTypes.FETCH_CHARACTER_START:
    case characterActionTypes.SEARCH_CHARACTER_START:
    case characterActionTypes.FETCH_CHARACTERID_START:
      return {
        ...state,
        loading: true,
      };
    case characterActionTypes.FETCH_CHARACTER_SUCCESS:
    case characterActionTypes.SEARCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: [...action.payload.results],
        error: null,
      };
    case characterActionTypes.FETCH_CHARACTERID_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: [action.payload],
        error: null,
      };
    case characterActionTypes.FETCH_CHARACTER_FAILURE:
    case characterActionTypes.SEARCH_CHARACTER_FAILURE:
    case characterActionTypes.FETCH_CHARACTERID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
