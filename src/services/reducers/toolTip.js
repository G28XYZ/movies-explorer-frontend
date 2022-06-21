import { CLOSE_TOOL_TIP, TOOL_TIP } from "../actions/toolTip";

export const toolTipReducer = (state, action) => {
  switch (action.type) {
    case CLOSE_TOOL_TIP:
      return {
        ...state,
        toolTip: { ...state.toolTip, isOpen: false },
      };
    case TOOL_TIP:
      return {
        ...state,
        toolTip: {
          ...state.toolTip,
          isOpen: true,
          success: action.success,
          message: action.message || "",
        },
      };
    default:
      return state;
  }
};
