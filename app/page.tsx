import { fetchProducts } from '../services/api';
import ProductFilter from './components/ProductFilter';

const Home = async () => {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 px-6">Product List</h1>
      <ProductFilter products={products} />
    </div>
  );
};

export default Home;
