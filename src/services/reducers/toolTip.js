import { CLOSE_TOOL_TIP } from "../actions/toolTip";

export const toolTipReducer = (state, action) => {
  switch (action.type) {
    case CLOSE_TOOL_TIP:
      return { ...state, toolTip: { ...state.toolTip, isOpen: false } };
    default:
      return state;
  }
};
