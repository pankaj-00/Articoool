import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./WritePage.css"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
  


export default function WritePage() {
      
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty()
    );

    const editor = React.useRef(null);
    function focusEditor() {
    editor.current.focus();
    }

    

    
    
    return (
          <div>
            <div className='Write'>
           <div className="WritePage">
            <label className='SelectImg' style={{color:"Teal"}} ><i className="PlusIcon fas fa-plus"> </i>
            Select an Image
            <input type="file" id="myfile" className="myfile" accept=".png, .jpeg, .jpg"/>
            </label>    
            
            <label className='Title'>
                <input type="text" className='myTitle' placeholder='Your Title'/>
            </label>

            <label className='TextBox1' style={{cursor: "text" }} onClick={focusEditor} >
                <Editor
                    
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    ref={editor}
                    editorState={editorState}
                    onChange={setEditorState}
                    placeholder="Write something!"
                />
            </label>
            <Link to="/" className='Link'>
            <div className='PublishButtonContainer'>
            
            <Button className="PublishButton" variant="outline-info">
                Publish
            </Button>
            
            </div>
            </Link>
          </div> 
          
        </div>
          </div>
      )
  }
  