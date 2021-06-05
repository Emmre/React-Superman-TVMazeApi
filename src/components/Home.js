import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemList } from "../store/actions";
import Helmet from "react-helmet";
import Cards from "./Card/Card";

const Home = () => {
  const item = useSelector((state) => state.List);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (data.length == 0 && item) {
        await dispatch(getItemList());
        return setData(item);
      }
    };

    fetchData();
  });

  return (
    <>
      //Fix
      <Helmet>
        <title>Superman TVMaze API</title>
        <meta name="description" content="Superman movies with TVMaze API" />
      </Helmet>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div
              className="col-lg-3 col-sm-12 col-md-6 col-xs-12 mt-5"
              key={Math.random()}
            >
              <Cards item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
