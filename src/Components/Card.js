import { useState } from "react";

const Card = ({ ...props }) => {
  const [addedIt] = useState(0);

  console.log(addedIt);

  // console.log(props.product_id);

  return (
    <div>
      <p> {props.key}</p>
      <div className=" relative group h-[368px] outline-none border-none">
        <img className="w-80" alt="" src={props.image_src} />

        {props.new ? (
          <p className="w-20 h-8 p-1 absolute top-4 left-4 bg-slate-900 text-white text-center">
            {" "}
            New{" "}
          </p>
        ) : (
          ""
        )}

        <div className=" xl:w-80 h-20 border-[1px] border-t-0 pt-4 p-4 absolute z-50 bg-white  md:top-48 xl:top-72 ">
          <div className="flex justify-between">
            {" "}
            <div className="text-lg text-slate-900 font-bold">
              {props.product_name}
            </div>{" "}
            <div className="text-lg text-gray-500  xl:pr-4"> {props.price}</div>
          </div>
          <p className="text-sm text-gray-500 mt-[1px]">
            {" "}
            {props.product_color}{" "}
          </p>
        </div>

        {/* <div className="absolute -bottom-[200px] group-hover:bottom-16 duration-700 h-48 p-2 w-80 left-[-8px] -z-1"> 
<ul className="w-80 bg-white pr-2 pl-2 pb-4 cursor-pointer border-l-[1px] border-r-[1px]">
<li className="text-right w-full pr-4 border-b-[1px] h-[40px] text-base text-gray-400 h-16 p-2 hover:text-gray-700 hover:border-gray-700">Compare&nbsp; <TbArrowForwardUpDouble style={{ display:"inline-block"}}/> </li>
<li className="text-right w-full pr-4 border-b-[1px] h-[40px] text-base text-gray-400 p-2 hover:text-gray-700 hover:border-gray-700"  >Add to Cart&nbsp; <BsCartPlusFill style={{ display:"inline-block"}} /></li>
<li className="text-right w-full pr-4 border-b-[1px] h-[40px] text-base text-gray-400 p-2 hover:text-gray-700 hover:border-gray-700">View Details &nbsp; <TbListDetails style={{ display:"inline-block"}} /> </li>
<li className="text-right w-full pr-4 border-b-[1px] h-[40px] text-base text-gray-400 p-2 hover:text-gray-700  hover:border-gray-700">Add to Wish List &nbsp; <AiFillHeart style={{ display:"inline-block"}} /></li>
</ul>
</div> */}
      </div>
    </div>
  );
};

export default Card;
