import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Landing";
import Login from "./pages/Login";
import "./index.css";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Festival from "./pages/Festivals";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Index />} />
          <Route path="/festivals" element={<Festival />} />
          <Route path="/dashboard" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
