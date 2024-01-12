import './App.css';
import  Login from "./screens/Login";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './screens/Signup';
import { CardProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
function App() {
  return (
    <>
    <CardProvider>
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/loginuser" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/cart" element={<Cart />} />

          </Routes>
        </div>
      </Router>
      </CardProvider>
    </>
  );
}

export default App;
