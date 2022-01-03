import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import "./WritePage.css";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";

import React, { useRef, useState, useEffect } from "react";
import "./WritePage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const WritePage2 = () => {
  const content = window.localStorage.getItem("content");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const titleRef = useRef();
  const contentRef = useRef();

  const saveContent = (content) => {
    window.localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(content))
    );
  };

  // const onChange = (editorState) => {
  //   const contentState = editorState.getCurrentContent();
  //   console.log(contentState);
  //   saveContent(contentState);
  //   setEditorState(editorState);
  // };

  const handlePublish = () => {
    const contentState = convertToRaw(editorState.getCurrentContent());
    let content = "";
    content =
      content +
      contentState.blocks.map((block) => {
        return block.text;
      });

    console.log(content);
  };

  return (
    <div className="Write">
      <div className="WritePage">
        <label className="SelectImg" style={{ color: "Teal" }}>
          <i className="PlusIcon fas fa-plus"> </i>
          Select an Image
          <input
            type="file"
            id="myfile"
            className="myfile"
            accept=".png, .jpeg, .jpg"
          />
        </label>

        <label className="Title">
          <input
            type="text"
            className="myTitle"
            placeholder="Your Title"
            ref={titleRef}
          />
        </label>

        <label className="TextBox1">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
            placeholder="Write here...."
            className="Editor"
            ref={contentRef}
          />
        </label>
        {/* <Link to="/" className="Link"> */}
        <div className="PublishButtonContainer">
          <Button
            className="PublishButton"
            variant="outline-info"
            onClick={handlePublish}
          >
            Publish
          </Button>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default WritePage2;
