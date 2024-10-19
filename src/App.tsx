import ProductCard from "./Component/ProductCard";
import { productList } from "./Component/data/Productdata";

interface Iprops {}

const App = ({}: Iprops) => {
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} />
  ));

  return (
    <div className=" container m-5 mx-auto  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-md ">
      {renderProductList}
    </div>
  );
};

export default App;
