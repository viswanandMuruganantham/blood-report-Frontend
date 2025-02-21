import { useNavigate } from "react-router-dom";
import Hero from "./Hero";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
    //   {/* <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-gray-600 rounded-lg p-6 shadow-xl text-center">
    //     <h1 className="text-4xl font-bold mb-4 text-white">Welcome!</h1>
    //     <p className="text-gray-300 mb-6 text-lg">
    //       Click the button below to proceed to file upload.
    //     </p>
    //     <button
    //       onClick={() => navigate("/upload")}
    //       className="mt-4 px-5 py-2 w-full rounded-lg font-semibold text-lg text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
    //     >
    //       Go to Upload
    //     </button>
    //   </div> */}
    // </div>
      <Hero/>
  );
}
