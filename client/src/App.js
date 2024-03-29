import "./App.css";
import { Route, Routes, Navigate, BrowserRouter, Link, NotFoundRoute } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Details from "./components/Details";
import Error from "./components/Error";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const user = localStorage.getItem("token");

  const signout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div className="App">
      {user && (
        <button type="button" className="signout_btn" onClick={() => signout()}>
          Sign OUT
        </button>
      )}

      <BrowserRouter>
        <Routes>
          {user && <Route path="/" exact element={<Main />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/device/:id" element={<Details />} />
         <Route path="*" element={<Error />}/>

        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
