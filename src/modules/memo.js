const initialState = {
  memolist: [],
};
const today = new Date();
export const ADD_MEMO = (user, text) => {
  return { type: "ADD_MEMO", memoUser: user, memoText: text };
};
const memo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMO":
      return {
        ...state,
        memolist: [
          ...state.memolist,
          {
            id: state.memolist.length,
            user: action.memoUser,
            text: action.memoText,
            date: { month: today.getMonth() + 1, day: today.getDate() },
          },
        ],
      };
    default:
      return state;
  }
};
export default memo;
