
import {useState,useRef} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'react-quill/dist/quill.snow.css';
import "./WritePage.css"
import { EditorState } from 'draft-js';

import React, { Component } from 'react'
import "./WritePage.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class WritePage2 extends Component {
    
    state={
       editorState: EditorState.createEmpty(),
    }
    
    onEditorStateChange =(editorState) =>{
        this.setState({
            editorState
        });
    };

    render() {

        const {editorState}= this.state;

        return (
        <div className='Write'>
           <div className="WritePage">
            <label className='SelectImg' style={{color:"Teal"}} ><i className="PlusIcon fas fa-plus"> </i>
            Select an Image
            <input type="file" id="myfile" className="myfile" accept=".png, .jpeg, .jpg"/>
            </label>    
            
            <label className='Title'>
                <input type="text" className='myTitle' placeholder='Your Title'/>
            </label>

            <label className='TextBox1' >
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder='Write here....'
                    className="Editor"
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
        )
    }
}
