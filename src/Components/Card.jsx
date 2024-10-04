/* eslint-disable react/prop-types */
const Card = ({ img, prodName, brand, price, maxPrice, discount }) => {
  return (
    <div className="flex flex-col h-[800px] w-[250px] gap-5">
      <img className="w-[250px] h-[300px]" src={img} alt="" />
      <div className="flex justify-between gap-6">
        <h3 className="text-lg font-semibold ">{prodName}</h3>
        <h4 className="text-lg">{brand}</h4>
      </div>
      <div className="flex justify-between items-center">
        <h4 className="text-2xl font-semibold">{price}</h4>
        <del className="text-lg text-zinc-400">{maxPrice}</del>
        <h5 className="text-yellow-300 text-lg">{discount}%</h5>
      </div>
      <button className="py-2 px-6 bg-black rounded-2xl text-white">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
