import "./App.css";
import { createStore } from "redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/js/bootstrap.bundle";

import { Outlet } from "react-router-dom";

function App() {
  const [response, setResponse] = useState([]);
  const [theme, setTheme] = useState("day");
  const [source, setSource] = useState([]);
  useEffect(async () => {
    await axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setResponse(res.data);
      setSource(res.data);
    });
  }, []);

  const reducer = (state = [], action) => {
    let { type, payload } = action;
    if (type === "CHOOSE_REGION" && payload != "All Regions") {
      state = response.filter((s) => s.region == payload);
      return state;
    } else if (type === "CHOOSE_REGION" && payload == "All Regions") {
      return (state = response);
    }
    if (type === "SEARCH_REGION" && payload) {
      return (state = response.filter((r) =>
        r.name.common.toLowerCase().includes(payload.word.toLowerCase())
      ));
    }

    return (state = response);
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
      <div className={theme === "day" ? "App light vh-100" : "App dark vh-100"}>
        <Navbar onChange={handleChange} theme={theme} />{" "}
        <Outlet context={[source, setSource]} />
      </div>
    </Provider>
  );
}

export default App;
