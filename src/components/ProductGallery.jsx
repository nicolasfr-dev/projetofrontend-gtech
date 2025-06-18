const ProductGallery = ({ image, alt }) => {
  return (
    <div className="bg-secondary h-full w-full p-5 rounded-md flex justify-center">
      <img src={image} alt={alt} className="w-full h-130 object-cover" />
    </div>
  );
};

export default ProductGallery;