import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [detailData, setDetailData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [addWistList, setAddWish] = useState(true);

  console.log(detailData);

  // const notify=()=>{

  //   toast("Added To Wishlist");

  // }

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

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 900, // Close the toast after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // const notify2=()=>{

  //   toast("Removed from Wishlist");

  // }

  const handleWishList = () => {
    if (addWistList === true) {
      setAddWish(false);
      notifySuccess("Added to WishList");
    } else {
      setAddWish(true);
      notifyError("Removed from Wishlist");
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setDetailData([json]);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="pt-20">
          <div className="container px-12 mx-auto">
            <p className="pt-12 pb-12 text-lg text-green-700"> Loading </p>
          </div>
        </div>
      ) : (
        detailData.map((data) => {
          return (
            <div className="pt-40 pb-32">
              <ToastContainer />
              <div className="container mx-auto px-12 w-[1100px] ">
                <div className="grid grid-cols-2 gap-12">
                  <div className="col-span-1 flex items-center">
                    <img
                      alt=""
                      src={data.image}
                      className="w-[78%] mx-auto border p-8 pb-12 rounded shadow-lg shadow-slate-50 "
                    />
                  </div>

                  <div className="col-span-1 mt-[55px]">
                    {/* <p> { id } </p> */}
                    <p className="text-2xl text-black"> {data.title} </p>
                    <p className="text-lg text-slate-800 font-semibold pt-2">
                      {data.category}
                    </p>
                    <p className="text-lg text-slate-600 pt-4">
                      {data.description}
                    </p>
                    <p className="w-[59px] h-8 bg-slate-100 border-2 rounded mt-4 text-center pt-[2px] flex justify-between items-center pl-2 pr-1 ">
                      {data.rating.rate}
                      <AiFillStar
                        className="inline-block text-green-600"
                        style={{ marginTop: "-1px" }}
                      />
                    </p>
                    <p className="text-2xl text-slate-700 pt-6 font-semibold">
                      {" "}
                      ${data.price}{" "}
                      <span className="text-slate-500 ml-2 line-through text-base font-normal inline-block mt-[-50px]">
                        {" "}
                        ${(data.price + 50).toFixed(2)}
                      </span>{" "}
                    </p>

                    <button className="px-4 py-3 bg-blue-600 mt-12 text-white text-base rounded inline-flex items-center justify-center">
                      {" "}
                      <BsFillBagHeartFill className="inline-block" /> &nbsp; Add
                      To Cart{" "}
                    </button>

                    <button
                      className={`ml-4 px-4 py-[10px] rounded border-2  mt-[-16px]  ${addWistList ? "border-slate-200 text-slate-700" : "border-red-200  text-red-400"}`}
                      onClick={handleWishList}
                    >
                      {" "}
                      Add To Wishlist &nbsp;{" "}
                      {addWistList ? (
                        <AiOutlineHeart
                          className="inline-block text-red-600 text-lg "
                          style={{ marginTop: "-3px" }}
                        />
                      ) : (
                        <AiFillHeart
                          className="inline-block text-red-600 text-lg "
                          style={{ marginTop: "-3px" }}
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ProductDetail;
