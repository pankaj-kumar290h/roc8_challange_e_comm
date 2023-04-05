import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";

import "../styles/homePage.scss";
import Loader from "../components/util/Loader";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../store/reducer/productReducer";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((e) => e.AllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  if (!data || data.length === 0) return <Loader />;

  return (
    <>
      <div className="search">
        <input placeholder="Search" onChange={handleSearch} type={"text"} />
      </div>

      <div className="all_Product_display">
        {/* render search query result or render all data*/}
        {searchQuery.length
          ? data
              .filter((e) => e.title.toLowerCase().includes(searchQuery))
              .map((e) => <Card key={crypto.randomUUID()} props={e} />)
          : data.map((e) => <Card key={crypto.randomUUID()} props={e} />)}
      </div>
    </>
  );
};

export default Home;
