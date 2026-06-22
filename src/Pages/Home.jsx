import "./Home.css";
import products from "../Data/products";
import ProductCard from "../components/ProductCart";


function Home() {
  return (
    <div className="home">

      <img
        className="banner"
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        alt="banner"
      />

      <div className="productsGrid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;