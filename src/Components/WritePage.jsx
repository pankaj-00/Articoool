import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./WritePage.css";
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class WritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  render() {
    return (
    
        <div className='Write'>
           <div className="WritePage">
            {/* <label className='SelectImg' style={{color:"Teal"}} ><i className="PlusIcon fas fa-plus"> </i>
            Select an Image
            <input type="file" id="myfile" className="myfile" accept=".png, .jpeg, .jpg"/>
            </label>     */}
            
            <label className='Title'>
                <input type="text" className='myTitle' placeholder='Your Title'/>
            </label>

            <label className='TextBox1' >
               <ReactQuill className="ReactQuill" theme="snow"
                    modules={this.modules}
                    formats={this.formats}
                    placeholder="Write here....">
                    
                </ReactQuill> 
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
        
    );
  }
}

export default WritePage;