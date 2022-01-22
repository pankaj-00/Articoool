import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./blogtilesedit.css";

const Blogtiles = () => {
  const [docs, setDocs] = useState([]);
  const handleData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const docs = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data().date);
      docs.push(doc);
    });
    setDocs(docs);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className=" align-items-center xl:columns-4 lg:columns-3 md:columns-2 grid-container ">
      {docs.map((doc) => {
        return (
          <div className="grid-item" key={doc.id}>
            <Link to="/post" className="Link">
              <img
                className="blogImg"
                src="https://cdn.pixabay.com/photo/2015/02/01/21/16/chalkboard-620316_1280.jpg"
                alt=""
              />
              <div className="blogInfo">
                <h4 className="blogTitle">{doc.data().title}</h4>

                <hr className="lineSpace" />
                <span className="blogTime">Loda Lasan</span>
              </div>
              <p className="blogDescription">
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blogtiles;
