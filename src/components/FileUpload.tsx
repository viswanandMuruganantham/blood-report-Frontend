import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  // Handle file selection from input
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  // Handle file drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  // Prevent default behavior when dragging over
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Handle file upload
  const handleUpload = () => {
    if (!file) {
      alert("Please select or drop a file first.");
      return;
    }
    alert(`File "${file.name}" uploaded successfully!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 w-full pl-[900px]">
      {/* Features Section with Animations */}
      <motion.div 
        className="absolute top-4 left-4 bg-white/10 p-6 rounded-lg text-white shadow-lg border border-white/30 ml-10 w-96 mt-44"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-xl font-bold mb-2">Features of Our Site</h3>

        <motion.div 
          className="mb-2 p-3 bg-gray-700/50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg">🔄 Drag & Drop</h4>
          <p className="text-sm text-gray-200">Easily upload files using drag & drop.</p>
        </motion.div>

        <motion.div 
          className="mb-2 p-3 bg-gray-700/50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg">⚡ Fast & Secure</h4>
          <p className="text-sm text-gray-200">Your files are uploaded with security & speed.</p>
        </motion.div>

        <motion.div 
          className="mb-2 p-3 bg-gray-700/50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg">🎨 User-Friendly</h4>
          <p className="text-sm text-gray-200">Simple & interactive interface for easy usage.</p>
        </motion.div>

        <motion.div 
          className="p-3 bg-gray-700/50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg">📱 Fully Responsive</h4>
          <p className="text-sm text-gray-200">Works seamlessly on all devices.</p>
        </motion.div>
      </motion.div>

      {/* File Upload Section */}
      <div className="w-full max-w-lg p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-xl border border-white/30 text-center mr-[900px] pr-9">
        <h2 className="text-2xl font-semibold mb-4 text-white">Upload a File</h2>

        {/* Drag & Drop Area */}
        <div
          className="border-dashed border-2 border-gray-400 p-10 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-700/30 transition duration-300 "
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {file ? (
            <p className="text-white">Selected: {file.name}</p>
          ) : (
            <p>Drag & Drop a file here or click below</p>
          )}
        </div>

        {/* File Input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-4 border p-2 rounded w-full bg-gray-50/50"
        />

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-lg shadow-blue-500/50 transition duration-300"
        >
          Upload
        </button>

        {/* Go Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 shadow-lg shadow-red-500/50 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
