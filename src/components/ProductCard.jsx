const ProductCard = ({image, category, title, price, off}) => {
    const ogPrice = parseFloat(price) //Preço original do produto
    const discount = ogPrice * off / 100; //Desconto aplicado ao produto
    const priceOff = ogPrice - discount //Preço Final
    
    return ( 
        <>
            <div className="w-100 h-100 space-x-2 select-none pointer-events-none">
                <div className="h-full w-full mb-5 relative justify-items-center content-center bg-white rounded-sm p-5">
                    <span className="absolute text-sm top-5 font-bold py-1 px-3 rounded-2xl bg-off text-dark-gray-2">{off}% OFF</span>
                    <img className="-rotate-30 " src={image} alt="" />
                </div>
                <div className="select-text">
                    <h6 className="text-light-gray text-xs">{category}</h6>
                    <h4 className=" text-dark-gray-2 text-2xl truncate">{title}</h4>
                </div>
                <div className="flex space-x-3 text-xl">
                    <h4 className="line-through text-light-gray">R${price}</h4>
                    <h4 className="font-bold">R${priceOff}</h4>
                </div>
            </div>
        </>
     );
}
 
export default ProductCard;