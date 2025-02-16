import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import FileUpload from "./components/FileUpload";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/upload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
}
