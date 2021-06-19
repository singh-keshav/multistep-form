export const initialState = {
  members: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "addmember":
      return { ...state, members: [...state.members, actions.payload] };

    case "editmember":
      return state;

    case "removemember":
      return state;

    default:
      return state;
  }
};

export default reducer;
