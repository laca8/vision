import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Player from "./pages/player/Player";
import PlayerDescription from "./pages/player/PlayerDescription";
import Header from "./component/head/Header";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Footer from "./component/head/Footer";
function App() {
  const loginRed = useSelector((state) => state.loginRed);
  const { userInfo } = loginRed;
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/profile"
          element={userInfo?.user ? <Profile /> : <Login />}
        />
        <Route
          path="/admin/players"
          element={userInfo?.user?.isAdmin ? <Player /> : <Home />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/player/:id" element={<PlayerDescription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
