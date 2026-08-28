import React, { useReducer, useRef, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Filter = (props) => {
  const Item = useSelector((data) => data);

  const finalItem = Item.allItems.items;

  const reducer = (state, action) => {
    switch (action.type) {
      case "showAccount":
        return { ...state, showAccount: !state.showAccount };
      case "showCategory":
        return { ...state, showCategory: !state.showCategory };
      case "hideAccount":
        return { ...state, showAccount: false };
      case "hideCategory":
        return { ...state, showCategory: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    showCategory: false,
    showAccount: false,
  });

  const [newFilt, setNewFilt] = useState("");

  const divRef = useRef(null);

  useEffect(() => {
    const handleOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        dispatch({ type: "hideAccount" });
        dispatch({ type: "hideCategory" });
      }

      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setNewFilt(json));
    };

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  // const handleFilter = (category) => {
  //   // Implement your filter logic here
  // };

  const [searchLetter, setSearchLetter] = useState("");

  console.log(searchLetter);

  if (!props.allData) {
    return null;
  }

  const newHandleData = (e) => {
    const inputValue = e.target.value.toLowerCase();

    setSearchLetter(inputValue);

    const filteredData = newFilt.filter(
      (product) =>
        product.title.toLowerCase().includes(inputValue.trim()) ||
        product.category.toLowerCase().includes(inputValue.trim()),
    );

    props.setDat(filteredData);
  };

  return (
    <div className="">
      <div className="bg-amber-400 h-24 bg-slate-100 ">
        <div className="container h-24 mx-auto px-12 flex justify-between items-center">
          <div
            className="w-auto flex items-center cursor-pointer"
            onClick={() => dispatch({ type: "showAccount" })}
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
            <h2 className="lg:text-[15px] ml-2 text-neutral-500">
              Shop By Category
            </h2>
          </div>

          <div className=" relative w-full lg:w-[550px] h-[50px]  h-22 p-4 mt-1 flex items-center justify-between ">
            <input
              className="flex-1 bg-white h-12 rounded-lg text-primeColor px-6 border-none outline-none placeholder:text:[14px]  placeholder:text-[#c4c4c4]"
              placeholder="Search your products here"
              value={searchLetter}
              onChange={newHandleData}
            />
            <svg
              style={{ marginLeft: "-50px" }}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </div>

          <div className="w-auto flex relative items-center pr-8">
            <Link to="/Cart">
              <div className=" relative cursor-pointer">
                <svg
                  className="absolute"
                  style={{ top: "-8px" }}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                </svg>
                <span
                  className="w-4 h-4 rounded-full bg-black absolute text-white flex items-center justify-center lg:text-[12px] top-1"
                  style={{ right: "-8px" }}
                >
                  {" "}
                  {finalItem.length}{" "}
                </span>
              </div>
            </Link>

            <div
              className="pl-8 flex cursor-pointer"
              onClick={() => dispatch({ type: "showCategory" })}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
              </svg>
            </div>

            <div></div>
          </div>
        </div>

        <div ref={divRef}>
          {state.showAccount ? (
            <div className="w-56 bg-black h-auto absolute left-48 top-42 p-7 rounded-md">
              <p
                className={`${props.categoryState.men ? "text-white" : "text-zinc-400"} text-base  hover:text-white cursor-pointer pl-3`}
                onClick={() => props.filterFunc("men's clothing")}
              >
                {" "}
                Men Clothing{" "}
              </p>

              <hr className="bg-white mt-2 h-px dark:bg-gray-700" />

              <p
                className={`${props.categoryState.women ? "text-white" : "text-zinc-400"} text-base hover:text-white cursor-pointer pl-3 pt-3`}
                onClick={() => props.filterFunc("women's clothing")}
              >
                {" "}
                Women's Clothing{" "}
              </p>

              <hr className="bg-zinc-400 mt-2 h-px dark:bg-gray-700" />

              <p
                className={`${props.categoryState.Jewelery ? " text-white" : "text-zinc-400"} text-base  hover:text-white cursor-pointer pl-3 pt-3`}
                onClick={() => props.filterFunc("jewelery")}
              >
                {" "}
                Jewelery{" "}
              </p>

              <hr className="bg-white mt-2 h-px dark:bg-gray-700" />

              <p
                className={`${props.categoryState.Electronics ? "text-white" : "text-zinc-400"} text-base  hover:text-white cursor-pointer pl-3 pt-3`}
                onClick={() => props.filterFunc("electronics")}
              >
                {" "}
                Electronics{" "}
              </p>

              <hr className="bg-white mt-2 h-px dark:bg-gray-700" />
            </div>
          ) : null}

          {state.showCategory ? (
            <div className="w-48 bg-black h-auto absolute right-56 top-42 p-7 rounded-md">
              <Link to="/signin">
                <p className="text-base text-zinc-400 hover:text-white cursor-pointer pl-3">
                  {" "}
                  Login{" "}
                </p>
              </Link>

              <hr className="bg-white mt-2 h-px dark:bg-gray-700" />

              <Link to="/signup">
                <p className="text-base text-zinc-400 hover:text-white cursor-pointer pl-3 pt-3">
                  {" "}
                  Sign Up{" "}
                </p>
              </Link>

              <hr className="bg-zinc-400 mt-2 h-px dark:bg-gray-700" />

              <Link to="/signin">
                <p className="text-base text-zinc-400 hover:text-white cursor-pointer pl-3 pt-3">
                  {" "}
                  Profile{" "}
                </p>
              </Link>

              <hr className="bg-white mt-2 h-px dark:bg-gray-700" />

              {/* <Link to="/signin"><p className="text-base text-zinc-400 hover:text-white cursor-pointer pl-3 pt-3"> Others </p></Link>

<hr className="bg-white mt-2 h-px dark:bg-gray-700" /> */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Filter;
