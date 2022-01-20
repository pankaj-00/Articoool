import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css";
import "./WritePage.css";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, getDoc } from "firebase/firestore";
import { EditorState } from "draft-js";
import { getAuth } from "firebase/auth";

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
            <Editor 
            
            editorState={ (e)=>
                this.setState({
                  article: {
                    ...this.state.article,
                    content: e,
                  },
                })
              }
            toolbarClassName="flex !justify-center toolbarClassName"
            
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
}

export default WritePage;
