import React, { useState, useEffect } from "react";
import Blogtile from "./Blogtile";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Button } from "react-bootstrap";
import "./blogtiles.css";
import parse from "html-react-parser";


const Blogtiles = () => {
  const [posts, setposts] = useState([]);
  const [dataIn, setDataIn] = useState(false);
  const postsRef = collection(db, "posts");

  const getData = async () => {
    const data = await getDocs(postsRef);
    const datas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setposts(datas);
    console.log(typeof posts[0].content, typeof posts[0].title);
    setDataIn(true);
    console.log(posts);
  };

  return (
    <div className="blogTiles">
      {dataIn ? <>{parse(JSON.stringify(posts[0].content))}</> : null}

      <Blogtile />
      <Blogtile />
      <Blogtile />
      <Blogtile />
      <Blogtile />
      <Blogtile />
<<<<<<< HEAD
      <button onClick={getData}>Set Posts</button>
=======
      
>>>>>>> 304a20c109cef14ccdc8763c3092ee8d6695cdd3
    </div>
  );
};

export default Blogtiles;
