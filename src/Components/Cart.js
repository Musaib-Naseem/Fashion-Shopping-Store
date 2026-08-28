import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

const Cart = () => {
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

  const notifySuccess2 = (message) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 900, // Close the toast after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const DeleteItems = (id) => {
    notifySuccess("Removed from Cart Successfully");

    dispatch({ type: "DeleteProducts", payload: id });
  };

  // const toastCall=()=>{

  //       notifySuccess("Removed from Cart Successfully");

  // }

  // const addedIds = useContext(MyContext);

  const [cartData, setCartData] = useState(null);

  console.log(cartData);

  const Items = useSelector((state) => state);

  console.log(Items.allItems.items);

  const ItemsArray = Items.allItems.items;

  const FilterById = (ids) => {
    if (!Array.isArray(ids)) {
      console.error("Error:ids must be an array");

      return [];
    }

    if (cartData != null && Items != null) {
      const filteredItems = cartData.filter((data) => ids.includes(data.id));
      return filteredItems;
    }
  };

  const FinalFilteredItems = FilterById(ItemsArray);

  console.log(FinalFilteredItems);

  //       const FilterByIds=(ids)=>{

  //      if(Items != null && cartData != null ) {

  //       const filteredItems = cartData.filter((data)=> ids.includes(data.id));

  //       return filteredItems;

  //      }

  //       }

  //      const FinalFilteredItems = FilterByIds(Items);

  //      console.log(FinalFilteredItems);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setCartData(json));
  }, []);

  return ItemsArray.length === 0 ? (
    <div className="pt-40 h-auto pb-40">
      <div className="container mx-auto px-12">
        <h1 className="text-4xl font-extrabold"> Cart </h1>

        <p className="text-base mt-3 text-sm">
          <Link className="text-neutral-500 text-sm" to="/">
            Home
          </Link>{" "}
          <IoIosArrowForward className="inline-block text-sm" />{" "}
          <span className="text-slate-900 text-sm"> Cart </span>
        </p>

        <div className="mt-20 flex justify-center">
          <div className="mt-8">
            {/* <img src="http://localhost:3001/static/media/emptyCart.230e4848b62fb3cab325.png" /> */}
          </div>
          <div className="shadow-lg pl-12 pr-12 pt-8 ml-16 flex justify-center w-1/3 pb-8">
            <div>
              <h1 className="text-xl font-extrabold text-center ">
                YOUR CART FEELS LONELY
              </h1>

              <p className="text-md text-slate-700 w-auto  text-center mt-4 mx-4 ">
                Your Shopping cart lives to serve. Give it purpose - fill it
                with books, electronics, videos, etc. and make it happy.
              </p>

              <Link to="/shop">
                {" "}
                <button className="bg-zinc-900 text-lg rounded-sm px-4 text-white block mt-8 py-2 flex block m-auto align-center">
                  {" "}
                  Continue Shopping &nbsp;{" "}
                  <FiArrowRight className="inline-block m-1" />
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="pt-40 pb-40 h-auto">
      <div className="container mx-auto px-12">
        {FinalFilteredItems ? (
          FinalFilteredItems.map((allItems) => {
            return (
              <div className="w-[1100px] shadow-xl shadow-gray-100 mx-auto rounded-lg mb-12 p-4 flex h-auto pt-[30px] pb-[48px] hover:shadow-gray-200">
                <ToastContainer />
                <div className="w-[900px] pl-4">
                  <p className="text-slate-600 text-[22px] font-bold">
                    {" "}
                    {allItems.title}
                  </p>
                  <p className="text-slate-500 text-[16px] pt-4 w-[740px]">
                    {" "}
                    {allItems.description}
                  </p>
                  <p className="text-gray-800 text-[26px] mt-[14px]">
                    {" "}
                    $ {allItems.price}{" "}
                    <span className="text-lg ml-2 line-through text-gray-500">
                      {" "}
                      ${(allItems.price + 40).toFixed(2)}{" "}
                    </span>
                  </p>

                  <button
                    className="p-2 bg-red-500 text-lg text-white rounded-lg mt-8 pl-4 pr-4"
                    onClick={() => DeleteItems(allItems.id)}
                  >
                    {" "}
                    <IoRemoveCircleSharp className="inline-block mr-1 text-xl" />{" "}
                    Remove From Cart{" "}
                  </button>

                  <button
                    className="p-3 bg-gray-200 ml-8 rounded-lg pl-4 pr-4"
                    onClick={() => notifySuccess2("Item Added To Wishlist")}
                  >
                    {" "}
                    Move To Wishlist{" "}
                  </button>
                </div>

                <div className="w-[200px]">
                  <img
                    alt=""
                    className="w-[80%] mx-auto"
                    src={allItems.image}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h1> No Data Found </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
