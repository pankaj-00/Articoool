import React, { useState, useEffect } from "react";
import "./Blocktiles.scss";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";

const SinglePost = ({ title, content, imgurl }) => {
  return (
    <div className="singlePost">
      <img className="postImage" src={imgurl} alt="" />
      <div className="EditIcon">
        <i className="postIcon fas fa-edit"></i>
        <i className="postIcon fas fa-trash-alt"></i>
      </div>

      <div className="blogDetails">
        <h4 className="blogTitle">{title}</h4>

        <hr className="lineSpace" />

        <h4>About-</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Blocktiles = () => {
  const [blogtiles, setBlogtiles] = useState([]);
  const [selected, setSelected] = useState("");

  const setSelectedTitle = (title) => {
    setSelected(title);
  };

  const handleSinglePost = () => {
    const singlePost = blogtiles.filter((obj) => obj.title === selected);
    console.log(singlePost[0]);
    return singlePost[0];
  };

  useEffect(() => {
    const query = '*[_type == "blogtiles"]';
    client.fetch(query).then((data) => setBlogtiles(data));
  }, []);

  return (
    <>
      {selected ? (
        <SinglePost
          title={handleSinglePost().title}
          content={handleSinglePost().description}
          imgurl={urlFor(handleSinglePost().imgUrl)}
        />
      ) : (
        <div className="app__blogtiles">
          {blogtiles.map((item, index) => (
            <motion.div
              whileInView={{ opecity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              key={item.title + index}
              className="app__blogtiles-item"
              onClick={() => setSelectedTitle(item.title)}
            >
              <img src={urlFor(item.imgUrl)} alt={item.title} />
              <h2 className="bold-text" style={{ marginTop: 10 }}>
                {item.title}
              </h2>
              <p className="p-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default Blocktiles;
