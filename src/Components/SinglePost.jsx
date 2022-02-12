import "./singlePost.css";
import { collection, doc, getDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";


const SinglePost = (props) => {
    
    const docID= props.docId;
    console.log(docID);
    var nameAuthor= "PankyJod";
    // const postRef = doc(db, "posts", docId);
    // const singleDoc= async () =>{ 
      
    // await getDoc(postRef)
    // .then((docs)=>{
    //   console.log(docs.id);
    // })
    // }
    

  return (
    <div className="singlePost">
      <img
        className="postImage"
        src="https://cdn.pixabay.com/photo/2015/02/01/21/16/chalkboard-620316_1280.jpg"
        alt=""
      />
      <div className="EditIcon">
        <i className="postIcon fas fa-edit"></i>
        <i className="postIcon fas fa-trash-alt"></i>
      </div>

      <div className="blogDetails">
        <h4 className="blogTitle">Its my life...</h4>

        <hr className="lineSpace" />
        <span className="blogTime">10 days ago</span>
        <p className="blogDescription">
          
        </p>
        <hr />
        <h4 className="AuthorName">Author-{nameAuthor}</h4>

        <h4>About-</h4>
        <p>most jodd flayer in genshin and valo, jodd Web Developer</p>
      </div>
    </div>
  );
};

export default SinglePost;
