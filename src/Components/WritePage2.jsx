

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./WritePage.css"
import { EditorState } from 'draft-js';
import { convertToRaw, convertFromRaw} from 'draft-js';
import debounce from 'lodash/debounce';

import React, { Component } from 'react'
import "./WritePage.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class WritePage2 extends Component {
    
    // constructor(props) {
    //  super(props);
    // this.state = { };
    // }
    
    state={
       editorState: EditorState.createEmpty(),
    }
    
    // onEditorStateChange =(editorState) =>{
    //     this.setState({
    //         editorState
    //     });
    // };

    

    saveContent = debounce((content) => {
    fetch('/content', {
      method: 'POST',
      body: JSON.stringify({
        content: convertToRaw(content),
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
  }, 1000);

    onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.saveContent(contentState);
    this.setState({
    editorState,
    });
    }

    componentDidMount() {
    fetch('/content').then(val => val.json())
    .then(rawContent => {
      if (rawContent) {
        this.setState({ editorState: EditorState.createWithContent(convertFromRaw(rawContent)) })
      } else {
        this.setState({ editorState: EditorState.createEmpty() });
      }
    });
    }
    
    
    render() {

        
        if (!this.state.editorState) {
        return (
        <h3 className="loading">Loading...</h3>
        );
        }

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
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
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
