import ReactMarkdown from "react-markdown";

interface dataToDisplay{
  data : string
}
const Result:React.FC<dataToDisplay> = ({data}) => {

  return (
    <div className="custom_result prose lg:prose-lg text-white bg-gray-900 p-6 rounded-lg shadow-md">
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
};

export default Result;
