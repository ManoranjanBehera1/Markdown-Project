// import './App.css';
import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("");

    const handleInputChange = (e) => {
    const md = e.target.value;
    setMarkdown(md);

    const html = marked(md);
    setHtmlPreview(html);

    
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>      
      <textarea value={markdown} onChange={handleInputChange}
        style={{
          width: "50%",
          height: "50%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
        }}
        placeholder="Type Markdown here..."
      />
      
      <div
        style={{
          width: "50%",
          height: "50%",
          padding: "10px",
          overflowY: "auto",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
        }}
        dangerouslySetInnerHTML={{ __html: htmlPreview }}
      ></div>
    </div>
  );
}

export default App;
