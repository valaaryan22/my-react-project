import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Create from "./Create";
import Home from "./Home";
import Login from './Login';
import Read from "./Read";
import Register from "./Register";
import Update from "./Update";
import store from './redux/store';


function App() {
  return (
    <>
   
   <Provider store={store}>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/create" element={<Create />} /> */}
          <Route path="/update/:id" element={<Update/>} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
