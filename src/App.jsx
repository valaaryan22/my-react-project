import { useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import Read from "./Read";
import store from "./redux/store";
import Register from "./Register";
import Update from "./Update";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <BlockNavigation />
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/create" exact element={<Create />} />
            <Route path="/update/:id" exact element={<Update />} />
            <Route path="/read/:id" exact element={<Read />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

function BlockNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const handlePopState = (event) => {
        event.preventDefault();
        navigate("/register", { replace: true });
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [location, navigate]);

  return null;
}

export default App;
