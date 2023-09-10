import React from 'react';

// export function Products() {
//   const [hook, setHook] = React.useState("Initial Value");
//   const [count, setCount] = React.useState(1);
//   const [product, setProduct] = React.useState([]);
//   console.log(product);
//   React.useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => (res.json()))
//       .then((json) => setProduct(json));
//   }, []);

//   return (
//     <div>
//       {product.map((prod, index) => <div className='card'>
//         <h2>{prod.title}</h2>
//         <img className="image-card" src={prod.image} />
//         <p>{prod.description}</p>
//         <p>{prod.rating.count}</p>
//         <p>{prod.rating.rate}</p>
//         <h4>${prod.price}</h4>
//       </div>)}

//     </div>
//   );
// }
export function Products() {
  const [hook, setHook] = React.useState("Initial Value");
  const [count, setCount] = React.useState(1);
  const [product, setProduct] = React.useState([]);
  console.log(product);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users",{
      method:"GET",
    })
      .then((res) => (res.json()))
      .then((json) => setProduct(json));
  }, []);

  return (
    <div>
      {product.map((prod, index) => <div className='card'>
        <h2>{prod.name}</h2>
        {/* <img className="image-card" src={prod.image} /> */}
        <p>Username:{prod.username}</p>
        <p>Email: {prod.email}</p>
        <p>Address:
          {prod.address.street}</p>
        <p>{prod.address.suite}</p>
        <p>{prod.address.city}</p>
        <p>{prod.address.zipcode}</p>
        <h4>{prod.geo}</h4>
        
      </div>)}

    </div>
  );
}