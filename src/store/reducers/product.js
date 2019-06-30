import * as ContactTypes from "../actions";
import { Products } from "../../data";

const initialState = {
  data: Products,
  filteredList: [],
  filter: "all",
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactTypes.HANDLE_SEARCH:
      return {
        ...state,
        filter: action.payload,
      };
    case ContactTypes.RANGE_FILTER:
      return {
        ...state,
      };
    case ContactTypes.CHECKBOX_FILTER:
      let filterOccurence = intersection(Products, action.payload);
      return {
        ...state,
        filteredList:
          filterOccurence.length === 0 ? state.data : filterOccurence,
      };
    case ContactTypes.TOGGLE_DETAILS:
      let data = [...state.data];
      data[findId(data, action.payload)].active = !data[
        findId(data, action.payload)
      ].active;
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
};
function findId(array, id) {
  return array.findIndex(object => object.id === id);
}
const intersection = (a, b) => {
  const s = new Set(b);
  let c = a.filter(x => s.has(x.value) || s.has(x.type));
  return c;
};
