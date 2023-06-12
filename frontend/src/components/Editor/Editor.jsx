import React, { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
const Editor = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  const handleEditorChange = (content) => {
    setMarkdownContent(content);
    console.log(content);
  };

  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor onChange={handleEditorChange} />

      <div>{markdownContent}</div>
    </div>
  );
};

export default Editor;
