import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./WritePage.css";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, doc, addDoc, getDoc } from "firebase/firestore";
import { EditorState } from "draft-js";
import { useState } from "react";
import React from 'react';
import { convertFromRaw, convertToRaw } from "draft-js";
import { getAuth } from "firebase/auth";
const WritePage2 = () => {
   
  const [editorState, setEditorState]=useState(EditorState.createEmpty());
  const[article, setArticle] = useState({date:new Date(), content:"" , title:"",userID: getAuth().currentUser.displayName})  
  const[error, setError]= useState("");
  const onEditorStateChange=(editorState)=>{
      setEditorState(editorState);
      setArticle({
                    ...article,
                    content:convertToRaw(editorState.getCurrentContent()),
                  },)
    };
  
  const postsRef = collection(db, "posts");
  const handlePublish = async () => {
    const { title, content, date, userID } = article;
      if (!title || !content)
        setError( "Can't leave fields empty" );
      try {
        await addDoc(postsRef, {
          title: title,
          content: content,
          date: date,
          userID: userID,
        });
      } catch {
        setError ("Failed to post article" );
      }
    };

  console.log(editorState);
    return ( 
        <div className="Write">
        <div className="WritePage">
          {/* <label className='SelectImg' style={{color:"Teal"}} ><i className="PlusIcon fas fa-plus"> </i>
            Select an Image
            <input type="file" id="myfile" className="myfile" accept=".png, .jpeg, .jpg"/>
            </label>     */}

          <label className="Title">
            <input
              type="text"
              className="myTitle"
              placeholder="Your Title"
              value={article.title}
              onChange={(e) => {
                setArticle(
                  {
                    ...article,
                    title: e.currentTarget.value,
                  },
                
                )}
                }
            />
          </label>

          <label className="TextBox1">
            <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName="flex !justify-center !bg-cyan-100"
            placeholder="Write here..."
            />
          
          </label>

          <Link className="Link" to="/">
            <div className="PublishButtonContainer">
              <Button
                className="PublishButton"
                style={{ textDecoration: "none" }}
                variant="outline-info"
                onClick={handlePublish}
              >
                Publish
              </Button>
            </div>
          </Link>
        </div>
      </div>
     );
}
 
export default WritePage2;
