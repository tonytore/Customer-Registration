import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// /Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  import React from 'react'
  
  const QuilEditor = ({
    label,
    className="sm:col-span-2",
    value,
    onChange
}) => {
    return (
        <div className={className}>
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
        />
      </div>
    )
  }
  
  export default QuilEditor
  
