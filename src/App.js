import "./App.css";
import { createStore } from "redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  const [response, setResponse] = useState([]);
  const [theme, setTheme] = useState("day");
  useEffect((_) => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setResponse(res.data);
    });
  });
  const reducer = (state = response, action) => {
    return state;
  };
  const store = createStore(reducer);

  const handleChange = (_) => {
    if (theme === "day") {
      setTheme("night");
    } else {
      setTheme("day");
    }
  };

  return (
    <Provider store={store}>
      <div className={theme === "day" ? "App light" : "App dark"}>
        <Navbar onChange={handleChange} theme={theme} />
      </div>
    </Provider>
  );
}

export default App;
