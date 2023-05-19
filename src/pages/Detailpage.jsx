import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const url = `https://api.noroff.dev/api/v1/online-shop/`;
// console.log(url);
const Detailpage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(url + id);
  }, [id]);
  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);
  return <div>hello</div>;
};

export default Detailpage;
