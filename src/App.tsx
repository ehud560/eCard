import { createContext, useState } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Cards from './components/Cards';
import Footer from './components/Footer';
import About from './components/About';

const theme = {
  light: "light",
  dark: "dark",
};
export let SiteTheme = createContext(theme.light);

function App() {
  let [userInfo, setUserInfo] = useState(
    JSON.parse(sessionStorage.getItem("userInfo") as string) == null
      ? { email: false, isAdmin: false }
      : JSON.parse(sessionStorage.getItem("userInfo") as string)
  );

  return (
    <div className="App">
      <ToastContainer theme="dark" />
      <Router>
        <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path="/" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/home" element={<Home />} />
          <Route path="register" element={<Register setUserInfo={setUserInfo} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cards" element={<Cards userInfo={userInfo} setUserInfo={setUserInfo} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
