import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";

import AppProvider from "./front/store/appContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);

reportWebVitals();
