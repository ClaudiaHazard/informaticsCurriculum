import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import StudyPlan from "./routes/StudyPlan";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudyPlan />} />
      </Routes>
    </>
  );
}

export default App;
