import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { TbArrowForwardUpDouble } from "react-icons/tb";
import { BsCartPlusFill } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";

const Card_Shop = ({ ...props }) => {
  // console.log(props.product_id);

  const dispatch = useDispatch();

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 900, // Close the toast after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleButton = (id) => {
    props.onDataFromChild(id);

    dispatch({ type: "AddProducts", payload: id });

    notifySuccess("Added To Cart Successfully");
  };

  return (
    <div className="inline-flex h-auto flex flex-start justify-center items-center">
      <ToastContainer />

      <div className="relative group h-[370px] outline-none border-none mr-[24px] ml-[12px] mb-12  overflow-hidden ">
        <div className="w-80 h-72 border-l-[1px] border-r-[1px] border-t-[1px] flex">
          {/* <p>  {props.product_id} </p> */}
          <img
            alt=""
            className=" w-[65%] p-8 pt-4 flex mx-auto my-auto"
            src={props.image_src}
          />
        </div>

        {props.new ? (
          <p className="w-20 h-8 p-1 absolute top-4 left-4 bg-slate-900 text-white text-center">
            {" "}
            New{" "}
          </p>
        ) : (
          ""
        )}

        <div className="w-80 h-[82px] border-[1px] border-t-0 pt-4 p-4 absolute z-50 top-72 bg-white">
          <div className="flex justify-between">
            {" "}
            <div className="text-lg text-slate-900 font-bold">
              {props.product_name}
            </div>{" "}
            <div className="text-lg text-gray-500"> ${props.price}</div>
          </div>
          <p className="text-sm text-gray-500 mt-[5px]">
            {" "}
            {props.product_category}{" "}
          </p>
        </div>

        <div className="absolute -bottom-[200px] group-hover:bottom-16 duration-700 h-48 p-2 w-80 left-[-8px] -z-1">
          <ul className="w-80 bg-white pr-2 pl-2 pb-4 cursor-pointer border-l-[1px] border-r-[1px]">
            <li className="text-right w-full pr-4 border-b-[1px] h-[40px] text-base text-gray-400 h-16 p-2 hover:text-gray-700 hover:border-gray-700">
              Compare&nbsp;{" "}
              <TbArrowForwardUpDouble
                style={{ display: "inline-block" }}
              />{" "}
            </li>
            <li
              className="text-right w-full pr-4 border-b-[1px] h-[40px] text-base text-gray-400 p-2 hover:text-gray-700 hover:border-gray-700"
              onClick={() => handleButton(props.product_id)}
            >
              Add to Cart&nbsp;{" "}
              <BsCartPlusFill style={{ display: "inline-block" }} />
            </li>
            <Link to={`/shop/productdetail/${props.product_id}`}>
              <li className="text-right w-full pr-4 border-b-[1px] h-[40px] text-base text-gray-400 p-2 hover:text-gray-700 hover:border-gray-700">
                View Details &nbsp;{" "}
                <TbListDetails style={{ display: "inline-block" }} />{" "}
              </li>
            </Link>
            <li className="text-right w-full pr-4 border-b-[1px] h-[40px] text-base text-gray-400 p-2 hover:text-gray-700  hover:border-gray-700">
              Add to Wish List &nbsp;{" "}
              <AiFillHeart style={{ display: "inline-block" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card_Shop;
