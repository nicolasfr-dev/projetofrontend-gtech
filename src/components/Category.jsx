const Category = ({image, title}) => {
  //Componente de categoria da home page
  
  return (
    <> 
    <div>
      <div className="justify-items-center content-center rounded-full w-35 h-35 bg-white">
        <img src={image} className="scale-125"/>
      </div>

        <h4 className="mt-5 text-dark-gray-2 justify-self-center font-bold">{title}</h4>
    </div>
    </>
  );
};

export default Category;
