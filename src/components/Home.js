import React, { Component } from "react";
import DocumentMeta from "react-document-meta";
import axios from "axios";
import Cards from "./Card/Card";

export default class Home extends Component {
  state = {
    movie: [],
  };
  componentDidMount() {
    axios
      .get("http://api.tvmaze.com/search/shows?q=superman")
      .then((result) => {
        const movie = result.data;
        this.setState({ movie });
      });
  }
  render() {
    const meta = {
      title: "Superman TVMaze API",
      description: "Superman movies with TVMaze API",
      canonical: `${window.location.href}`,
      meta: {
        charset: "utf-8",
        name: {
          keywords: "Superman,TV,Movies,Batman",
        },
      },
    };
    const { movie } = this.state;
    return (
      <DocumentMeta {...meta}>
        <div className="container">
          <div className="row">
            {movie.map((item) => (
              <div className="col-3 mt-5" key={Math.random()}>
                <Cards item={item} />
              </div>
            ))}
          </div>
        </div>
      </DocumentMeta>
    );
  }
}
