import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const List = ({ ...props }) => {
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

  const deleteItemNew = (id) => {
    notifySuccess("Added to Cart SuccessFully");
    dispatch({ type: "AddProducts", payload: id });
  };

  return (
    <div className="pl-4 pr-4 w-full ml-4  mr-8">
      <ToastContainer />

      <tr className="flex w-full border-b-[2px] pb-8 mt-8">
        <td className="w-1/5 justify-center items-center text-center pl-8">
          {" "}
          <img alt="" className="w-[80px] " src={props.image_src} />{" "}
        </td>

        <td className="w-1/5 flex justify-center items-center text-center text-slate-800">
          {" "}
          <p> {props.product_name} </p>{" "}
        </td>

        <td className="w-1/5 flex justify-center items-center text-center text-slate-800">
          {" "}
          <p> {props.product_category}</p>{" "}
        </td>

        <td className="w-1/5 flex justify-center items-center text-center text-slate-800">
          {" "}
          <p> {props.price}</p>{" "}
        </td>

        <td className="w-1/5 flex justify-center items-center text-center text-slate-800 pl-4">
          {" "}
          <p>
            {" "}
            <button
              className="bg-slate-600 text-white p-[12px] text-[15px] rounded text-center w-auto flex justify-center items-center"
              onClick={() => deleteItemNew(props.id)}
            >
              <BsFillCartFill className="inline" />
              &nbsp; Add To Cart{" "}
            </button>
          </p>{" "}
        </td>
      </tr>
    </div>
  );
};

export default List;
