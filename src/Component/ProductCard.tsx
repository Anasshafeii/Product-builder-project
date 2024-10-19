import { Iproduct } from "./Interfaces/Iproduct";
import Image from "./Image";
import Button from "./UI/Button";
import { textCutter } from "../Utils/functions";

interface Iprops {
  product: Iproduct;
}

const ProductCard = ({ product }: Iprops) => {
  return (
    <div className="border rounded-md p-2 flex flex-col  max-w-sm md:max-w-lg mx-auto md:mx-0">
      <Image className="w-25 h-25" alt={product.title} src={product.imageUrl} />

      <h3>{product.title}</h3>
      <p>{textCutter(product.description)}</p>
      <div className="flex items-center my-3 gap-3">
        <span className="w-5 p-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 p-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 p-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>$500.000</span>
        <Image
          className="w-10 h-10 rounded-full object-center"
          alt="Product image"
          src="https://media.istockphoto.com/id/1696167872/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites.jpg?s=1024x1024&w=is&k=20&c=sfRAnSjXlDxAAAMZ0ZtYG5GpetUCOqETKyVc0Oz6kyU="
        />
      </div>

      <div className="flex gap-2 mt-2">
        <Button className="bg-indigo-400 ">Edit</Button>
        <Button className="bg-red-600  ">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
