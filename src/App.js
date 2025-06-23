//import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import LoginOtp from './pages/LoginOtp';
import { Routes, Route } from "react-router-dom";
import Registration from './pages/Registration';

function App() {
  return (
    // <div className="App">
    //  <Login />
    //  {/* <LoginOtp /> */}
    // </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify" element={<LoginOtp />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
  );
}

export default App;
