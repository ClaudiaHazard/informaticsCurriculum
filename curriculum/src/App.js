import './App.css';
import { Routes, Route } from "react-router-dom";
import StudyPlan from "./routes/StudyPlan";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudyPlan />} />
      </Routes>
    </>
  );
}

export default App;
