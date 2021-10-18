import "./App.css";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

function generatePDF(value) {
  console.log(value);
}

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  
  return (
    <div>
      <div className="container">
        <MDEditor
          value={value}
          onChange={setValue}
        />
        {/* <MDEditor.Markdown source={value} /> */}
      </div>
      <button
        className="generate"
        onClick={() => generatePDF(value)}
      >
        Generate PDF
      </button>
    </div>
  );
}
