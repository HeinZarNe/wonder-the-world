import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Detail from "./components/Detail";
import Home from "./components/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/:index" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
