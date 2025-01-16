// 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import Read from "./Read";
import Register from "./Register";
import Update from "./Update";
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update/>} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
