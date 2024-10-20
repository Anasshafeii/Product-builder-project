import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./Component/ProductCard";
import Modal from "./Component/UI/Modal";
import { productList } from "./Component/data/Productdata";
import Button from "./Component/UI/Button";
import { modalInputs } from "./Component/data/Inputs";
import Input from "./Component/UI/Input";
import { Iproduct } from "./Component/Interfaces/Iproduct";

interface Iprops {}

const App = ({}: Iprops) => {
  const defualtProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  };

  const [product, setProduct] = useState<Iproduct>(defualtProduct);
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setProduct({ ...product, [name]: value });
  }

  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(product);
  }

  function cancelHandler() {
    console.log("cancel clicked");
    setProduct(defualtProduct);
    close();
  }

  // Render
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  const renderInputs = modalInputs.map((input) => (
    <div className="flex flex-col gap-3" key={input.id}>
      <label className="text-sm font-medium text-gray-700" htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        onChange={onChangeHandler}
        value={product[input.name]}
      />
    </div>
  ));

  return (
    <div className=" container m-5 mx-auto  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-md ">
      {renderProductList}
      <Button className="bg-green-400 p-2 hover:bg-green-800 " onClick={open}>
        Add
      </Button>
      <Modal isOpen={isOpen} setOpen={close} title="Add a new product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderInputs}
          <div className="flex items-center gap-3">
            <Button className="bg-indigo-400 p-2 hover:bg-indigo-800 ">
              Submit
            </Button>
            <Button
              className="bg-gray-400 p-2 hover:bg-gray-800 "
              onClick={cancelHandler}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
