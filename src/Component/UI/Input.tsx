import { InputHTMLAttributes } from "react";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      className="border-[1px] py-3 px-3 border-gray-300 border-opacity-12 shadow-md 
      focus:border-indigo-500 focus:outline-none 
      focus:ring-indigo-500 rounded-md  text-md"
      {...rest}
    />
  );
};

export default Input;
