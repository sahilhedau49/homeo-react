import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Mainpage from "./components/Mainpage";
import Registration from "./components/Registration";
import PopUp from "./components/PopUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Header />, <Mainpage />]} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/tohome" element={<PopUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
