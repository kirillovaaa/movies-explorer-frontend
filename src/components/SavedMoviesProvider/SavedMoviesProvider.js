import React, { useState } from "react";
import SavedMoviesContext from "../../contexts/SavedMoviesContext";

const SavedMoviesProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState([]);

  return (
    <SavedMoviesContext.Provider value={[savedMovies, setSavedMovies]}>
      {children}
    </SavedMoviesContext.Provider>
  );
};

export default SavedMoviesProvider;
