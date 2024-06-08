import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import loginSlice from "./redux/slices/loginSlice";
import { login, logout } from "./redux/slices/loginSlice";
import Counter from "./components/Counter";

function App() {
  // const isLogin = useSelector((state) => state.login.isLogin);
  // console.log(isLogin);
  // const dispatch = useDispatch();

  // const handleAuth = () => {
  //   if (isLogin) {
  //     dispatch(logout());
  //   } else {
  //     dispatch(login());
  //   }
  // };
  return (
    <>
      {/* <h1>{isLogin ? "Sudah Login" : "Belum Login"}</h1>
      <button onClick={handleAuth}>{isLogin ? "Logout" : "Login"}</button> */}

      <Counter />
    </>
  );
}

export default App;
