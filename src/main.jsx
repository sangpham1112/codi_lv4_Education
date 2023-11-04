import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClientID } from "./utils/ClientID.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={ClientID}>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </GoogleOAuthProvider>
  </QueryClientProvider>
);
