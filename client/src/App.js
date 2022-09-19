import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import Login from './components/Login';
import Signup from './components/Signup'
import Main from "./components/Main"


function App() {
  const user = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Login />}>

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
