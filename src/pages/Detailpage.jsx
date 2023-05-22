import React from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
const Detailpage = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  // const { addToCart } = useContext(ProductContext);

  //get singel product based on id
  const product = products.find((item) => {
    return item.id === id;
  });
  console.log(product);
  // destructure the products
  const { title, description, imageUrl, price, rating } = product;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
export default Detailpage;
// const Detailpage = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   let { id } = useParams();
//   console.log(id);
//   useEffect(() => {
//     async function singleData(url) {
//       try {
//         setIsLoading(true);
//         setIsError(false);

//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);

//         setData(json);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     singleData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
//   }, [id]);
//   if (isLoading || !data) {
//     return (
//       <div>
//         <h1>Loading....</h1>
//       </div>
//     );
//   }

//   if (isError) {
//     return <div>Error</div>;
//   }

//   console.log(data);
//   return (
//     <>
//       <div>
//         <h1> {data.title} </h1>
//       </div>
//       ;
//     </>
//   );
// };

// export default Detailpage;
