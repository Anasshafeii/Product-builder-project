import { useState } from "react";
import ProductCard from "./Component/ProductCard";
import Modal from "./Component/UI/Modal";
import { productList } from "./Component/data/Productdata";
import Button from "./Component/UI/Button";

interface Iprops {}

const App = ({}: Iprops) => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Render product List
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} />
  ));

  return (
    <div className=" container m-5 mx-auto  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-md ">
      {renderProductList}
      <Modal isOpen={isOpen} setOpen={close}>
        <Button className="bg-indigo-400 p-2 hover:bg-indigo-800 ">
          Submit
        </Button>
        <Button className="bg-gray-400 p-2 hover:bg-gray-800 ">Cancel</Button>
      </Modal>
    </div>
  );
};

export default App;
