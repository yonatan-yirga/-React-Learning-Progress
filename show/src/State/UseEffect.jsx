// import { useEffect, useState } from "react";

// function UseEffect() {
// //   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);

// const [count, setCount] = useState("");


//   useEffect(() => {
//     if (count.trim() === "") {
      
//       return;
//     }
    

//     fetch(`https://dummyjson.com/products`)
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products));
//   },[count]);
 


//   return (
//     <div>
//       <button onClick={() => setCount(count + "1")}>Increment Coun</button>
     
     
//       <h1>Searching</h1>

//       {/* <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       /> */}

//       {
//         (products.length === 0 ? (
//           <p>No products found.</p>
//         ) : (
//           products.map((product) => (
//             <div key={product.id}>
//               <h3>{product.title}</h3>
//               <p>${product.price}</p>
//             </div>
//           ))
//         ))}
//     </div>
//   );
// }

// export default UseEffect;


import { useEffect, useState } from "react";

function UseEffect() {

  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);


  useEffect(() => {

    if (category === "") {
      return;
    }

    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

  }, [category]);


  return (
    <div>

      <h1>Product Category</h1>

      <button onClick={() => setCategory("smartphones")}>
        Phones
      </button>

      <button onClick={() => setCategory("smartphones")}>
        Laptops
      </button>

      <button onClick={() => setCategory("mens-watches")}>
        Watches
      </button>


      {/* <h2>{category}</h2> */}


      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}

    </div>
  );
}

export default UseEffect;