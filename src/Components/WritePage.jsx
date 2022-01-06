import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./WritePage.css";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, getDoc } from "firebase/firestore";

import { getAuth } from "firebase/auth";

<<<<<<< HEAD
=======

>>>>>>> 304a20c109cef14ccdc8763c3092ee8d6695cdd3
class WritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        content: "",
        date: new Date(),
        userId: getAuth().currentUser.displayName,
      },
      error: "",
    };
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  render() {
    const postsRef = collection(db, "posts");
    const handlePublish = async () => {
      const { title, content, date, userId } = this.state.article;
      if (!title || !content)
        this.setState({ error: "Can't leave fields empty" });
      try {
        await addDoc(postsRef, {
          title: title,
          content: content,
          date: date,
          userId: userId,
        });
      } catch {
        this.setState({ error: "Failed to post article" });
      }
    };

    return (
      <div className="Write">
        <div className="WritePage">
          {/* <label className='SelectImg' style={{color:"Teal"}} ><i className="PlusIcon fas fa-plus"> </i>
            Select an Image
            <input type="file" id="myfile" className="myfile" accept=".png, .jpeg, .jpg"/>
            </label>     */}

<<<<<<< HEAD
          <label className="Title">
            <input
              type="text"
              className="myTitle"
              placeholder="Your Title"
              value={this.state.article.title}
              onChange={(e) => {
                this.setState({
                  article: {
                    ...this.state.article,
                    title: e.currentTarget.value,
                  },
                });
              }}
            />
          </label>

          <label className="TextBox1">
            <ReactQuill
              ref={(el) => {
                this.quill = el;
              }}
              value={this.state.article.content}
              onChange={(e) => {
                this.setState({
                  article: {
                    ...this.state.article,
                    content: e,
                  },
                });
              }}
              className="ReactQuill"
              theme="snow"
              modules={this.modules}
              formats={this.formats}
            ></ReactQuill>
          </label>

          <Link to="/">
            <div className="PublishButtonContainer">
              <Button
                className="PublishButton"
                style={{ textDecoration: "none" }}
                variant="outline-info"
                onClick={handlePublish}
              >
=======
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
>>>>>>> 304a20c109cef14ccdc8763c3092ee8d6695cdd3
                Publish
              </Button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default WritePage;
=======
export default WritePage;
>>>>>>> 304a20c109cef14ccdc8763c3092ee8d6695cdd3
