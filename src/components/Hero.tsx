import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-10 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 flex flex-col items-center justify-center text-white px-6">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Report Parser
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Upload your blood report and get instant, AI-powered insights into
          your health.
        </p>
        <button
          onClick={() => navigate("/upload")}
          className="mt-6 bg-white text-red-600 font-semibold px-6 py-3 rounded-lg text-lg shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          🔍 Analyze Now
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        <FeatureCard
          title="⚡ Instant Report Parsing"
          description="No more manual reading! Our AI extracts key details instantly."
        />
        <FeatureCard
          title="📊 Visual Insights"
          description="Understand your health with detailed charts and structured data."
        />
        <FeatureCard
          title="🧑‍⚕️ AI-Powered Suggestions"
          description="Get health insights based on your report parameters."
        />
        <FeatureCard
          title="🚀 Fast & Accurate"
          description="Processes reports in seconds with high precision."
        />
        <FeatureCard
          title="📜 Multi-Format Support"
          description="Upload PDFs, scanned images, or digital reports seamlessly."
        />
      </div>

      {/* Final CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold">Take Charge of Your Health Now! 🚀</h2>
        <p className="mt-2 text-lg">Upload your blood report and get an AI-driven analysis today.</p>
        <button
          onClick={() => navigate("/upload")}
          className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-200">{description}</p>
    </div>
  );
};

export default Hero;
