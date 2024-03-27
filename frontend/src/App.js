import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNotes/CreateNote";
import SingleNote from "./screens/CreateNotes/SingleNote";

// app comment
const App = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/createnote" Component={CreateNote} />
        <Route path="/note/:id" Component={SingleNote} />
        <Route path="/mynotes" Component={() => <MyNotes search={search} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
