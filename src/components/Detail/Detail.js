import React, { useEffect, useState } from "react";
import s from "./Detail.module.css";
import { Card } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

const Detail = ({ match }) => {
  const [item, setItem] = useState([]);

  const getItem = async () => {
    const id = match.params.id;
    const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    setItem(data);
  };
  if (item.length == 0) {
    getItem();
  }
  const { image, name, summary } = item;

  return (
    <>
      //Fix
      <Helmet>
        <title>{`${name}`}'s Detail Page</title>
        <meta name="description" content={summary} />
      </Helmet>
      <div className="container mt-5">
        <div className="row">
          <Card style={{ width: "100%" }}>
            <div className={s.Wrapper}>
              <Card.Img
                className={s.cardImage}
                src={
                  image?.original ||
                  "https://source.unsplash.com/random/230x338"
                }
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{summary?.replace(/<.*?>/gm, "")}</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default withRouter(Detail);
