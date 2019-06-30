import { ProductReducer } from "../src/store/reducers/product";

describe(" ProductReducer", () => {
  it("should return the initial state", () => {
    expect(ProductReducer(undefined, {})).toMatchSnapshot();
  });

  it("should handle HANDLE_SEARCH", () => {
    expect(
      ProductReducer(
        {
          filter: "all",
        },
        {
          type: "HANDLE_SEARCH",
        }
      )
    ).toMatchSnapshot();
  });
});
