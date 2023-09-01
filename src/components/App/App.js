import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// компоненты
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// контексты
import CurrentUserContext from "../../contexts/CurrentUserContext";
// роуты
import SavedMoviesProvider from "../SavedMoviesProvider/SavedMoviesProvider";
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
import AuthRoute from "../AuthRoute/AuthRoute";

const defaultUser = {
  _id: "",
  email: "",
  name: "",
};

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(defaultUser);

  const navigate = useNavigate();

  // при старте приложения ищем токен в localstorage
  useEffect(() => {
    MainApi.authorize()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsAppLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      // так как мы уже могли получить пользовательские данные при успешной проверке токена на первом рендере,
      // нужно убедиться, что они уже есть -- если есть, лишний запрос делать не нужно
      if (!currentUser._id) {
        setIsAppLoading(true);
        MainApi.getUserInfo()
          .then((user) => {
            setCurrentUser(user);
          })
          .catch((e) => console.log(e))
          .finally(() => {
            setIsAppLoading(false);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleLogout = () => {
    MainApi.logout();
    setIsLoggedIn(false);
    setCurrentUser(defaultUser);
    localStorage.removeItem("recentSearch");
    navigate("/");
  };

  const handleLoginSubmit = async ({ email, password }) => {
    try {
      await MainApi.login(email, password);
      setIsLoggedIn(true);
      navigate("/movies", { replace: true });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const handleRegisterSubmit = async ({ name, email, password }) => {
    try {
      await MainApi.register(name, email, password);
      await handleLoginSubmit({ email, password });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const handleEditProfile = async ({ name, email }) => {
    try {
      const user = await MainApi.setUserInfo(name, email);
      setCurrentUser(user);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isLoggedIn={isLoggedIn} isAppLoading={isAppLoading} />

      <SavedMoviesProvider>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                isAppLoading={isAppLoading}
                isLoggedIn={isLoggedIn}
                element={<Movies />}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                isAppLoading={isAppLoading}
                isLoggedIn={isLoggedIn}
                element={<SavedMovies />}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isAppLoading={isAppLoading}
                isLoggedIn={isLoggedIn}
                element={
                  <Profile
                    onSubmit={handleEditProfile}
                    onLogout={handleLogout}
                  />
                }
              />
            }
          />

          <Route
            path="/signin"
            element={
              <AuthRoute
                isAppLoading={isAppLoading}
                isLoggedIn={isLoggedIn}
                element={<Login onSubmit={handleLoginSubmit} />}
              />
            }
          />

          <Route
            path="/signup"
            element={
              <AuthRoute
                isAppLoading={isAppLoading}
                isLoggedIn={isLoggedIn}
                element={<Register onSubmit={handleRegisterSubmit} />}
              />
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer isAppLoading={isAppLoading} />
      </SavedMoviesProvider>
    </CurrentUserContext.Provider>
  );
};

export default App;
