import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterPage from "./screens/RegisterPage/RegisterPage";

// app comment
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/mynotes" Component={() => <MyNotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
