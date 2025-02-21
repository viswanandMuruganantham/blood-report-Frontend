import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import FileUpload from "./components/FileUpload";
import Loaders from "./components/Loaders";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Router>
      <div className="custom_style  bg-gray-900 text-white">
         { isLoading && <Loaders/> }
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/upload" element={<FileUpload setIsLoading={setIsLoading} />} />
        </Routes>
      </div>
    </Router>
  );
}
