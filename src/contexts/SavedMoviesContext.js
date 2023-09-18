import { createContext } from "react";

const defaultValue = [[], (newValue = []) => {}];

const SavedMoviesContext = createContext(defaultValue);

export default SavedMoviesContext;
