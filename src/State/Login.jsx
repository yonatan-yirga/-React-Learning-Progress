// import { useRef, useState } from "react";

// function Login() {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const [email, setEmail] = useState("yona");
//   const [password, setPassword] = useState("");

//   function handleLogin(e) {
//     e.preventDefault();

//     if (email.length === 0) {
//       alert("Email is required");
//       emailRef.current.focus();
//       return;
//     }

//     if (password === "") {
//       alert("Password is required");
//       passwordRef.current.focus();
//       return;
//     }

   

//     // Send data to the backend
//   }

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         ref={emailRef}
//         type="email"
//         placeholder="Email"
//          value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <br />
//       <br />

//       <input
//         ref={passwordRef}
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <br />
//       <br />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;

import { useEffect, useMemo, useState } from "react";

function Login() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Login;