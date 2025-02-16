import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 pr-[1200px]">
      <div className="w-96 h-full flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/30 ml-[610px] ">
        <div className="p-8 rounded-lg shadow-xl text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">Welcome!</h1>
          <p className="text-gray-200 mb-6">Click the button below to proceed to file upload.</p>
          <button
            onClick={() => navigate("/upload")}
            className="px-6 py-3 bg-green-500 text-white text-lg rounded hover:bg-green-600 shadow-lg shadow-green-500/50 transition duration-300"
          >
            Go to Upload
          </button>
        </div>
      </div>
    </div>
  );
}
