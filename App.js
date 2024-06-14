import "./App.css";
import Textform from "./compontents/Textform";
import Navbar from "./compontents/Navbar";
let name = "Aayush";

function App() {
  return (
    <>
    
       <Navbar />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
