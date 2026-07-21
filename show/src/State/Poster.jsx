import useFetch from "../hook/useFetch";
import "./Poster.css";

function Poster() {
  const { data, loading, error } = useFetch(
   "https://dummyjson.com/products","products"
  );
  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="poster-status">No posts available.</div>;
  }

  return (
    <div className="poster-container">
      <h1>Poster</h1>
      <ul className="poster-list">
        {data.map((products) => (
          <li key={products.id} className="poster-item">
            <h2>{products.title}</h2>
            <p>{products.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Poster;