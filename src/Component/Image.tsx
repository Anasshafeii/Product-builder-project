interface Iprops {
  className: string;
  src: string;
  alt: string;
}

const Image = ({ className, src, alt }: Iprops) => {
  return <img className={className} src={src} alt={alt} />;
};

export default Image;
