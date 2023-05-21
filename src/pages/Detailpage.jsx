import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detailpage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    async function singleData(url) {
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

    singleData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);
  if (isLoading || !data) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);
  return (
    <>
      <div>
        <h1>This is a product page for product {id} </h1>
      </div>
      ;
    </>
  );
};

export default Detailpage;
