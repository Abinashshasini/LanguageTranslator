import axios from "axios";

import { CLEAR_REQ, GET_TRANSLATE, TRANSLATE_ERROR } from "./type";

// GET the translation resultexp
export const translationResult = (formData) => async (dispatch) => {
  dispatch({
    type: CLEAR_REQ,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/translate", formData, config);
    dispatch({
      type: GET_TRANSLATE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TRANSLATE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
