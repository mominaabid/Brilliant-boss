import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer.tsx";
import App from "./App.tsx";
import { Slide, ToastContainer } from "react-toastify";
 
import { Provider } from "react-redux";
import { persistor, store } from "./components/Redux/Store.jsx";
import { PersistGate } from "redux-persist/integration/react";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading = {null} persistor={persistor}>

    <App />

    <Footer />

    <ToastContainer
        position="top-right" 
        autoClose={2000} 
        hideProgressBar={true} 
        newestOnTop={true}
        closeOnClick
        rtl={false} 
        pauseOnFocusLoss={false} 
        draggable={false} 
        pauseOnHover 
        theme="colored" 
        transition={Slide} 
        style={{
          borderRadius: "8px", 
 
          fontSize: "14px", 
        }}
      />
    </PersistGate>
    </Provider>
  </StrictMode>
);
