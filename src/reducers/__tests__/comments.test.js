import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

describe("Comments Reducer", () => {
  it("Should handle actions of type SAVE_COMMENT", () => {
    const action = {
      type: SAVE_COMMENT,
      payload: "New Comment!",
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(["New Comment!"]);
  });

  it("Should handle action with unknown type", () => {
    const action = {
      type: "sdfkeoscosees",
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
  });
});
