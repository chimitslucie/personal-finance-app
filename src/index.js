import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview";
import Transactions from "./Pages/Transactions";
import Budgets from "./Pages/Budgets";
import Pots from "./Pages/Pots";
import RecurringBills from "./Pages/RecurringBills";

import "./Style/Main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/Overviw" element={<Overview />} />
        <Route exact path="/Transactions" element={<Transactions />} />
        <Route exact path="/Budgets" element={<Budgets />} />
        <Route exact path="/Pots" element={<Pots />} />
        <Route exact path="/RecurringBills" element={<RecurringBills />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
