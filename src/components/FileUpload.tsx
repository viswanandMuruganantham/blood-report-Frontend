import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "axios";
import Result from "./Result";

interface propsInterface{
  setIsLoading:(val:boolean) => void
}
const FileUpload:React.FC<propsInterface> =({setIsLoading}:propsInterface)=> {
  const [file, setFile] = useState<File | null>(null);
  const [disable, setDisable] = useState<boolean>(false)
  const [result, setResult] = useState<string>("")

  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select or drop a file first.");
      return;
    }
    setDisable(prev => !prev)
    setIsLoading(true)
      const formData = new FormData();

        // Update the formData object
        if(file){
          formData.append(
            "pdf",
            file
        );
        }
        console.log(formData)
        console.log(file)
        const response = await axios.post("http://localhost:8000//process", formData,  { headers: { "Content-Type": "multipart/form-data" } })
        console.log(response.data.message)
        setResult(response.data.message)
        setDisable(prev => !prev)
        setIsLoading(false)
  };

  return (
    <div className="flex p-9 flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full px-4">

      {/* File Upload Section */}
      <div className="w-full max-w-lg p-6 rounded-lg shadow-xl border border-gray-700 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">Upload a File</h2>

        {/* Drag & Drop Area */}
        <div
          className="border-dashed border-2 border-gray-500 p-10 rounded-lg cursor-pointer text-gray-300 hover:bg-gray-700 transition duration-300"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          >
          {file ? <p className="text-white">Selected: {file.name}</p> : <p>Drag & Drop a file here or click below</p>}
        </div>

        {/* File Input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-4 border p-2 rounded w-full bg-gray-700 text-white"
          />

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={disable}
          className="mt-4 px-5 py-2 w-full rounded-lg font-semibold text-lg text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
          Upload
        </button>

        {/* Go Back Button */}
        <button
          disabled={disable}
          onClick={() => navigate("/")}
          className="mt-3 px-5 py-2 w-full rounded-lg font-semibold text-lg text-white bg-red-600 hover:bg-red-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
          Go Back
        </button>
      </div>

      { result && <Result data={result}/>}


    </div>
  );
}

export default FileUpload;