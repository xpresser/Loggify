import { configureStore as createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const configureStore = () => {
  const store = createStore({ reducer: rootReducer });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./rootReducer", () => store.replaceReducer(rootReducer));
  }
  return store;
};

export { configureStore };
