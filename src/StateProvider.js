// // import React, { createContext, useContext, useReducer } from "react";

// // // Prepares the dataLayer
// // export const StateContext = createContext();

// // // Wrap our app and provide the Data layer
// // export const StateProvider = ({ reducer, initialState, children }) => (
// //   <StateContext.Provider value={useReducer(reducer, initialState)}>
// //     {children}
// //   </StateContext.Provider>
// // );

// // // Pull information from the data layer
// // export const useStateValue = () => useContext(StateContext);
// // import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { StateProvider } from "./StateProvider";
// import reducer, { initialState } from "./reducer";

// ReactDOM.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StateProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
