import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// компоненты
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// контекст
import CurrentUserContext from "../../contexts/CurrentUserContext";
// роуты
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Page404 from "../Page404/Page404";
// утилиты
import MainApi from "../../utils/MainApi";

const defaultUser = {
  _id: "",
  email: "",
  name: "",
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(defaultUser);

  const navigate = useNavigate();

  // при старте приложения ищем токен в localstorage
  useEffect(() => {
    MainApi.authorize()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        navigate("/", { replace: true });
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      // так как мы уже могли получить пользовательские данные при успешной проверке токена на первом рендере,
      // нужно убедиться, что они уже есть -- если есть, лишний запрос делать не нужно
      if (!currentUser._id) {
        MainApi.getUserInfo()
          .then((user) => {
            console.log(user);
            setCurrentUser(user);
          })
          .catch((e) => console.log(e));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleLogout = () => {
    MainApi.logout();
    setIsLoggedIn(false);
    setCurrentUser(defaultUser);
  };

  const handleLoginSubmit = ({ email, password }) => {
    MainApi.login(email, password)
      .then(() => {
        setIsLoggedIn(true);
        navigate("/", { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleRegisterSubmit = ({ name, email, password }) => {
    MainApi.register(name, email, password)
      .then(() => {
        navigate("/signin");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleEditProfile = ({ name, email }) => {
    MainApi.setUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={
                <Profile onSubmit={handleEditProfile} onLogout={handleLogout} />
              }
            />
          }
        />

        <Route
          path="/signin"
          element={<Login onSubmit={handleLoginSubmit} />}
        />

        <Route
          path="/signup"
          element={<Register onSubmit={handleRegisterSubmit} />}
        />

        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </CurrentUserContext.Provider>
  );
};

export default App;
