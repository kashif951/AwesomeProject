import React from "react";
import store from "./src/store";
import { Provider } from "react-redux";
import Login from "./src/components/Login";
const App=()=>{
return(
  <Provider store={store}>
 <Login />
  </Provider>
)
}
export default App