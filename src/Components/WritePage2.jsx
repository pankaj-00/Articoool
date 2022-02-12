import "./WritePage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { EditorState } from "draft-js";
import { useState } from "react";
import React from 'react';
import { getAuth } from "firebase/auth";


const WritePage2 = () => {
   
  const [editorState, setEditorState]=useState(EditorState.createEmpty());
  const[article, setArticle] = useState({date:new Date(), content:"" , title:"",userID: getAuth().currentUser.displayName})  
  const[error, setError]= useState("");
  const onEditorStateChange=(editorState)=>{
      setEditorState(editorState);
      
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
        setError("Successfully posted!")
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
            <textarea 
            className="w-full h-full outline-none" 
            placeholder="Write here..." 
            style={{backgroundColor:"azure"}}
            onChange={(e) => {
                setArticle(
                  {
                    ...article,
                    content: e.currentTarget.value,
                  },
                
                )}
                }/>
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
