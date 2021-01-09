import { CLEAR_REQ, GET_TRANSLATE, TRANSLATE_ERROR } from "../actions/type";

const initialState = {
  translate: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSLATE:
      return {
        ...state,
        translate: payload,
        loading: false,
      };
    case TRANSLATE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_REQ:
      return {
        ...state,
        translate: null,
        loading: true,
        error: {},
      };
    default: {
      return state;
    }
  }
}
