/* eslint-disable react/prop-types */

const Button = ({ data, value }) => {
  return (
    <div
      className={`px-10 w-[250px] text-lg font-semibold text-center py-2 border border-black rounded-lg active:bg-black active:text-white ${
        value && "text-white bg-black"
      }`}
    >
      {data}
    </div>
  );
};

export default Button;
