const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        storage: [...state.storage, action.payload],
        amount: state.amount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "REMOVE":
      const itemToRemove = state.storage.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        return {
          ...state,
          storage: state.storage.filter((item) => item.id !== action.payload),
          amount: state.amount - 1,
          totalPrice: state.totalPrice - itemToRemove.price,
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
