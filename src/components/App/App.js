import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// компоненты
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// роуты
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Page404 from "../Page404/Page404";

const App = () => {
  const [isLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          path="/movies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} element={<Movies />} />
          }
        />

        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} element={<SavedMovies />} />
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} element={<Profile />} />
          }
        />

        <Route path="/signin" element={<Login />} />

        <Route path="/signup" element={<Register />} />

        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
