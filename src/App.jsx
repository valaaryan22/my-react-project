import { useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute Component={Home} />} />
          <Route path="/create" element={<ProtectedRoute Component={Create} />} />
          <Route path="/update/:id" element={<ProtectedRoute Component={Update} />} />
          <Route path="/read/:id" element={<ProtectedRoute Component={Read} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
   
  );
}
function ProtectedRoute({ Component }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("log");
    if (!token) {
      alert("You must be logged in to access this page.");
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return <Component />;
}

export default App;