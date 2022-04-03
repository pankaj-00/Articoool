import "./singlePost.css";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import {
  useParams,
  } from "react-router-dom";
import { db } from "../firebase";
import { useEffect,useState } from "react";
import Moment from "./Utilities/Date.jsx";


const SinglePost = () => {
    
    const [singleDocument,setSingleDoc]=useState({});
    const router= useParams();
    const docId = router.postId;
    var nameAuthor= "PankyJod";
    
    const singleDoc= async () =>{ 
    const postRef = doc(db, "posts", docId); 
    
     const docu= await getDoc(postRef);
     setSingleDoc(docu.data());
     
     
    }
    
    useEffect(()=>{
      singleDoc();
    },[]);
    

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
        <h4 className="blogTitle">{singleDocument.title}</h4>

        <hr className="lineSpace" />
        <span className="blogTime">
          {singleDocument.date?<Moment date={singleDocument.date} format="lll"/>:null}
        </span>
        <p className="blogDescription">
        {singleDocument.content}
        </p>
        <hr />
        <h4 className="AuthorName">Author-{nameAuthor}</h4>

        <h4>About-</h4>
        <p></p>
      </div>
    </div>
  );
};

export default SinglePost;
