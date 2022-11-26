import "./App.css";
import { Routes, Route } from "react-router-dom";
import Allover from "./Component/Allover";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Allover />} />
      </Routes>
    </div>
  );
}

export default App;
