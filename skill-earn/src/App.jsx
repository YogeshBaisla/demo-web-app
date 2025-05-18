import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StreamPage from "./pages/StreamPage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stream/:courseId" element={<StreamPage />} />
      </Routes>
    </Router>
  );
}
