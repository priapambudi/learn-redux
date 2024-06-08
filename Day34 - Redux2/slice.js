import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = {
  username: "admin",
  password: "123",
};

// action & reducer
const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      if (
        action.payload.username === user.username &&
        action.payload.password === user.password
      ) {
        console.log("login success");
        return {
          ...state,
          isLogin: true,
        };
      } else {
        return "invalid username or password";
      }
    },
    logout: (state, action) => {
      console.log("logout success");
      return {
        ...state,
        isLogin: false,
      };
    },
  },
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.total += 1;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.total -= 1;
    },
  },
});

// store
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
  },
});

// subscribe (optional)
store.subscribe(() => {
  console.log("store updated =", store.getState());
});

// dispatch
store.dispatch(
  loginSlice.actions.login({
    username: "admin",
    password: "123",
  })
);

store.dispatch(loginSlice.actions.logout());

store.dispatch(
  cartSlice.actions.addToCart({
    id: 1,
    name: "laptop",
    price: 1000,
  })
);
