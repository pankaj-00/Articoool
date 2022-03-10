import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import "./blogtilesedit.css";
import Moment from "./Utilities/Date.jsx";

import Categories from "./categories";

const Blogtiles = () => {
  const [docs, setDocs] = useState([]);
  const [category, setCategory]= useState("")
  
  const handleData = async () => {
    const postRef=collection(db, "posts");
    const orderby= query(postRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(orderby);
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push(doc);
        
        
      
    });
    setDocs(docs);
  };
 

  useEffect(() => {
    handleData();
  }, []);

  const handleCategory=()=>{
    return 
  }


  var minFunction= Math.min(docs.length,4);
  const randomNumbers=[28,48,56];
  function random(mn, mx) {
            return Math.random() * (mx - mn) + mn;
        }


  return  (
    <>
    <Categories/>
    <div className={`items-center xl:columns-${minFunction} lg:columns-3 md:columns-2 grid-container`}>
      {docs.map((doc) => {
      
      var numberOfLines=randomNumbers[Math.floor(random(1,3))-1];//number of lines to be displayed as content determined by the line height and number of lines
        
        
        return category ? handleCategory():( 
          <div className="grid-item" key={doc.id}>
            <Link to={`/post/${doc.id}`} className="Link">
              <img
                className="blogImg"
                src="https://cdn.pixabay.com/photo/2015/02/01/21/16/chalkboard-620316_1280.jpg"
                alt=""
              />
              <div className="blogInfo">
                <h4 className="blogTitle">{doc.data().title}</h4>

                <hr className="lineSpace" />
                <span className="blogTime"><Moment
                  date={doc.data().date}
                  format="lll"

                /></span>
              </div>
              <p className={`max-h-${numberOfLines} leading-7 overflow-hidden block text-ellipsis break-words blogDescription`}>
                {doc.data().content}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Blogtiles;
