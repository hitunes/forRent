export const toggleDetails = actionCreator("TOGGLE_DETAILS");
export const checkboxChange = actionCreator("CHECKBOX_FILTER");
export const handleFilterRange = actionCreator("RANGE_FILTER");
export const handleSearchOnclick = actionCreator("HANDLE_SEARCH");

function actionCreator(type) {
  return payload => ({
    type: type,
    payload,
  });
}
