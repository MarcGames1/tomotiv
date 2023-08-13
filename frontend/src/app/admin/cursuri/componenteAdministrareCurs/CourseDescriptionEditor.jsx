import React from 'react';
import SunEditor, { buttonList as defaultButtonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const CourseDescriptionEditor = ({ content, onChange }) => {
  const buttonList = [
    ['undo', 'redo'],
    ['font','fontSize', 'formatBlock'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['removeFormat'],
    ['fontColor', 'hiliteColor'],
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'list', 'table'],
    ['link'],
    ['fullScreen', 'showBlocks', 'codeView'],
    ['preview'],
  ];
  return (
    <div className="form-control">
      <SunEditor
        setOptions={{
          height: 200,
          buttonList,
          defaultStyle: 'font-family: Inter; font-size:20px;'
        }}
        height="50vh"
        lang={'ro'}
        setContents={content}
        onChange={onChange}
      />
    </div>
  );
};

export default CourseDescriptionEditor;
