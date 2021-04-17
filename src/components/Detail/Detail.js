import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import DocumentMeta from "react-document-meta";
import s from "./Detail.module.css";

export default class Detail extends Component {
  state = {
    supermanItem: [],
    image: "",
    summary: "",
    name: "",
  };

  //ES6 async await

  async componentDidMount() {
    const id = this.props.match.params.id;

    const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    this.setState({ supermanItem: data });

    const image = this.state.supermanItem.image.original;
    this.setState({ image: image });

    const summary = this.state.supermanItem.summary.replace(/<.*?>/gm, "");
    this.setState({ summary: summary });

    const name = this.state.supermanItem.name;
    this.setState({ name: name });
  }

  render() {
    const { image, summary, name } = this.state;
    const meta = {
      title: `${name}'s Detail Page `,
      description: `${summary}`,
      canonical: `${window.location.href}`,
      meta: {
        charset: "utf-8",
        name: {
          keywords: "Superman,TV,Movies,Batman",
        },
      },
    };
    return (
      <DocumentMeta {...meta}>
        <div className="container mt-5">
          <div className="row">
            <Card style={{ width: "100%" }}>
              <div className={s.Wrapper}>
                <Card.Img className={s.cardImage} src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{summary}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
        </div>
      </DocumentMeta>
    );
  }
}
