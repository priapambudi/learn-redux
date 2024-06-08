import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    items: [],
    totalPrice: 0,
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price,
      };
  }
};

// store
const store = legacy_createStore(cartReducer);

// subscribe

// action
const action1 = {
  type: "ADD_TO_CART",
  payload: { id: 1, name: "Iphone 13", price: 1000 },
};

const action2 = {
  type: "ADD_TO_CART",
  payload: { id: 2, name: "Iphone 14", price: 2000 },
};

const action3 = {
  type: "REMOVE_FROM_CART",
  payload: { id: 1, name: "Iphone 13", price: 1000 },
};

// dispatch
store.dispatch(action1);
console.log(store.getState());

store.dispatch(action2);
console.log(store.getState());

store.dispatch(action3);
console.log(store.getState());
