import { createContext, useEffect, useReducer, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import CardShop from "./Card_Shop";
import List from "./List";
import Filter from "./Filter";

// const UserContext = createContext("");

// export const useMyContext=()=>{

// return useContext(UserContext);

// }
const MyContext = createContext();

const Shop = () => {
  const [allData, setAllData] = useState(null);

  const [addedId, setAddedId] = useState([]);

  console.log(addedId);

  const handleDataFromChild = (id) => {
    setAddedId((prevState) => [...prevState, id]);
  };

  const [Show_Num, setShowNum] = useState({
    num: 9,
    height: "1680px",
  });

  const [startNum, setStartNum] = useState(0);
  const [showItem, setShowItem] = useState(true);
  const [setFilterCategory] = useState("");
  const [pricingCategory, setPricingCategory] = useState("");

  const [categoryState, setCategoryState] = useState({
    men: false,
    women: false,
    Jewelery: false,
    Electronics: false,
  });

  const [priceState, setPriceState] = useState({
    num1: false,
    num2: false,
    num3: false,
    num4: false,
  });

  // console.log(pricingCategory);

  // console.log(Show_Num.num);
  // console.log(Show_Num.height);

  const ChangeShowData = (num) => {
    if (num === "18") {
      setShowNum({
        ...Show_Num,
        num: num,
      });
    } else if (num === "20") {
      setShowNum({
        ...Show_Num,
        num: num,
      });
    } else if (num === "9") {
      setShowNum({
        ...Show_Num,
        num: num,
      });
    }
  };

  // useEffect(()=>{

  //     setPricingCategory(allData);

  // },[allData])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllData(json);
        setPricingCategory(json);
      });
  }, []);

  const clearFilter = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllData(json);
        setPricingCategory(json);
      });

    setCategoryState((prevstate) => ({
      men: false,
      women: false,
      Jewelery: false,
      Electronics: false,
    }));

    setPriceState((prevPrice) => ({
      num1: false,
      num2: false,
      num3: false,
      num4: false,
    }));
  };

  const CategoryFilter = (categ) => {
    fetch(`https://fakestoreapi.com/products/category/${categ}`)
      .then((res) => res.json())
      .then((json) => {
        setAllData(json);
        setPricingCategory(json);
      });
    setFilterCategory(categ);

    if (categ === "men's clothing") {
      setCategoryState((prevstate) => ({
        men: true,
        women: false,
        Jewelery: false,
        Electronics: false,
      }));
    } else if (categ === "women's clothing") {
      setCategoryState((prevstate) => ({
        men: false,
        women: true,
        Jewelery: false,
        Electronics: false,
      }));
    } else if (categ === "jewelery") {
      setCategoryState((prevstate) => ({
        men: false,
        women: false,
        Jewelery: true,
        Electronics: false,
      }));
    } else if (categ === "electronics") {
      setCategoryState((prevstate) => ({
        men: false,
        women: false,
        Jewelery: false,
        Electronics: true,
      }));
    }

    setPriceState((prevPrice) => ({
      num1: false,
      num2: false,
      num3: false,
      num4: false,
    }));

    // setPricingCategory(allData);
  };

  const priceCateg = (min, max) => {
    var filt_Data = pricingCategory.filter(
      (products) => products.price >= min && products.price <= max,
    );

    setAllData(filt_Data);

    if (min === "0") {
      setPriceState((prevPrice) => ({
        num1: true,
        num2: false,
        num3: false,
        num4: false,
      }));
    } else if (min === "51") {
      setPriceState((prevPrice) => ({
        num1: false,
        num2: true,
        num3: false,
        num4: false,
      }));
    } else if (min === "101") {
      setPriceState((prevPrice) => ({
        num1: false,
        num2: false,
        num3: true,
        num4: false,
      }));
    } else if (min === "500") {
      setPriceState((prevPrice) => ({
        num1: false,
        num2: false,
        num3: false,
        num4: true,
      }));
    }
  };

  const [changeBg, setChangeBg] = useState(true);
  const [changeBg2, setChangeBg2] = useState(false);
  const [PaginNum, setPaginNum] = useState({ from: 1, to: 9 });

  const changeActive = () => {
    setChangeBg(true);
    setChangeBg2(false);
    setShowItem(true);
  };

  const changeActive2 = () => {
    setChangeBg(false);
    setChangeBg2(true);
    setShowItem(false);
  };

  const initialData = {
    one: true,
    two: false,
    three: false,
    four: false,
  };

  const handleClick = (num) => {
    switch (num) {
      case 1:
        dispatch({ type: "one" });
        setPaginNum({ from: 1, to: 9 });
        setStartNum(0);
        setShowNum({
          ...Show_Num,
          num: 9,
        });
        break;

      case 2:
        dispatch({ type: "two" });
        setPaginNum({ from: 10, to: 18 });
        setStartNum(9);
        setShowNum({
          ...Show_Num,
          num: 18,
        });
        break;

      case 3:
        dispatch({ type: "three" });
        setPaginNum({ from: 19, to: 20 });
        setStartNum(18);
        setShowNum({
          ...Show_Num,
          num: 21,
        });
        break;

      // case 4:

      // dispatch({type:"four"});
      // return setPaginNum({from:36,to:48})

      default:
        return num;
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "one":
        return {
          ...state,
          ...(state.one = true),
          ...(state.two = false),
          ...(state.three = false),
          ...(state.four = false),
        };

      case "two":
        return {
          ...state,
          ...(state.two = true),
          ...(state.one = false),
          ...(state.three = false),
          ...(state.four = false),
        };

      case "three":
        return {
          ...state,
          ...(state.three = true),
          ...(state.one = false),
          ...(state.two = false),
          ...(state.four = false),
        };

      case "four":
        return {
          ...state,
          ...(state.four = true),
          ...(state.one = false),
          ...(state.two = false),
          ...(state.three = false),
        };

      default:
        return state;
    }
  };

  const [changePagin, dispatch] = useReducer(reducer, initialData);

  // console.log(changePagin);

  const UpdateParentState = (newValue) => {
    setAllData(newValue);
  };

  const childProps = {
    allData,
    categoryState,
    setDat: UpdateParentState,
    filterFunc: CategoryFilter,
  };

  return (
    <div>
      <MyContext.Provider value={addedId}>
        <div className="pt-20 h-auto pb-24">
          <Filter {...childProps} style={{ marginTop: "0px" }} />

          <div className="container mx-auto px-12 h-auto pt-20">
            <h1 className="text-4xl font-extrabold"> Products </h1>

            <p className="text-base mt-3 text-sm">
              <Link className="text-neutral-500 text-sm" to="/">
                Home
              </Link>{" "}
              <IoIosArrowForward className="inline-block text-sm" />{" "}
              <span className="text-slate-900 text-sm"> Shop </span>
            </p>

            <div className="flex mt-12">
              <div className="w-1/4 h-auto">
                <p className="text-xl text-slate-700 font-bold">
                  Shop by Category
                </p>

                <div className="mt-8 w-[278px]">
                  <p
                    className={`${categoryState.men ? "text-slate-700 border-gray-500" : "text-gray-500"} border-b-[1px]  mb-[18px] pb-[10px] hover:text-slate-700 hover:border-gray-500 cursor-pointer`}
                    onClick={() => CategoryFilter("men's clothing")}
                  >
                    {" "}
                    Men Clothing
                  </p>
                  <p
                    className={`${categoryState.women ? "text-slate-700 border-gray-500" : "text-gray-500"} border-b-[1px]  mb-[18px] pb-[10px] hover:text-slate-700 hover:border-gray-500 cursor-pointer`}
                    onClick={() => CategoryFilter("women's clothing")}
                  >
                    {" "}
                    Women's Clothing{" "}
                  </p>
                  <p
                    className={`${categoryState.Jewelery ? "text-slate-700 border-gray-500" : "text-gray-500"} border-b-[1px] mb-[18px]  pb-[10px] hover:text-slate-700 hover:border-gray-500 cursor-pointer`}
                    onClick={() => CategoryFilter("jewelery")}
                  >
                    {" "}
                    Jewelery{" "}
                  </p>
                  <p
                    className={`${categoryState.Electronics ? "text-slate-700 border-gray-500" : "text-gray-500"} border-b-[1px] mb-[18px] pb-[10px] hover:text-slate-700 hover:border-gray-500 cursor-pointer`}
                    onClick={() => CategoryFilter("electronics")}
                  >
                    {" "}
                    Electronics{" "}
                  </p>
                </div>

                <p className="text-xl text-slate-700 font-bold mt-12">
                  Shop by Price
                </p>

                <div className="mt-8 w-64">
                  <p
                    className={` ${priceState.num1 ? "text-slate-700 border-gray-500" : "text-gray-500"}  border-b-[1px]  pb-[10px] hover:text-slate-700 hover:border-gray-500 cursor-pointer`}
                    onClick={() => priceCateg(0, 50)}
                  >
                    {" "}
                    $0.00 - $49.99{" "}
                  </p>
                  <p
                    className={`${priceState.num2 ? "text-slate-700 border-gray-500" : "text-gray-500"}  border-b-[1px]  mt-4 pb-[10px] hover:text-slate-700 hover:border-gray-500 cursor-pointer`}
                    onClick={() => priceCateg(51, 100)}
                  >
                    {" "}
                    $51.00 - $99.99{" "}
                  </p>
                  <p
                    className={`${priceState.num3 ? "text-slate-700 border-gray-500" : "text-gray-500"}  border-b-[1px]  mt-4 pb-[10px] hover:text-slate-700 hover:border-gray-500 cursor-pointer`}
                    onClick={() => priceCateg(101, 200)}
                  >
                    {" "}
                    $100.00 - $499.99{" "}
                  </p>
                  <p
                    className={`${priceState.num4 ? "text-slate-700 border-gray-500" : "text-gray-500"}  border-b-[1px]  mt-4 pb-[10px] hover:text-slate-700 hover:border-gray-500 cursor-pointer`}
                    onClick={() => priceCateg(500, 1000)}
                  >
                    {" "}
                    $500.00 - $999.99{" "}
                  </p>
                </div>

                <button
                  className="w-[260px] text-base bg-slate-800 p-[12px] text-white mt-12 rounded "
                  onClick={clearFilter}
                >
                  {" "}
                  Clear Filter{" "}
                </button>
              </div>

              <div className="w-3/4 h-auto ">
                <div className="flex justify-between pl-[12px]">
                  <div className="flex">
                    <div
                      onClick={changeActive}
                      className={`w-8 h-8 flex justify-center items-center border-[1px]  mr-4 cursor-pointer ${changeBg ? "bg-slate-900 text-white" : "text-gray-700"}`}
                    >
                      {" "}
                      <BsFillGridFill />{" "}
                    </div>

                    <div
                      onClick={changeActive2}
                      className={`w-8 h-8 flex justify-center items-center border-[1px]  mr-4 cursor-pointer ${changeBg2 ? "bg-slate-900 text-white" : "text-gray-700"}`}
                    >
                      {" "}
                      <FaList />{" "}
                    </div>
                  </div>

                  <div>
                    <div className="pr-[36px]">
                      <span className="text-gray-500"> Show : </span>
                      <select
                        onChange={(e) => ChangeShowData(e.target.value)}
                        id="countries"
                        class="w-8 md:w-16 border-[1px] border-gray-200 py-1 px-2 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 inline-block focus-within:outline-none focus-visible:border-primeColor bg-white"
                      >
                        <option value="9">9</option>
                        <option value="18">18</option>
                        <option value="20">All</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* <div className=" relative z-1 mt-14  overflow-hidden  flex justify-between "> */}

                {/* <Card product_name="Round Table Watch"  new="true" product_color="Black and White" price="$44.00" image_src={ OneSlide } />

<Card product_name="Smart Watch" new="true"  product_color="Black" price="$30.00" image_src={ smartWatch } />

<Card product_name="Cloth Basket"   product_color="Mixed" price="$80.00" image_src={ clothBasket } /> */}

                {showItem ? (
                  <div className="mt-8 flex flex-wrap">
                    {!!allData && allData.length > 0 ? (
                      allData.slice(startNum, Show_Num.num).map((data) => {
                        const word_array = data.title.split(" ");

                        const words_show = word_array.slice(0, 3);
                        const befor_sh = words_show.join(" ");
                        const prod_id = data.id;

                        // console.log(befor_sh);

                        return (
                          <CardShop
                            onDataFromChild={handleDataFromChild}
                            product_id={prod_id}
                            product_name={befor_sh}
                            product_category={data.category}
                            price={data.price}
                            image_src={data.image}
                          />
                        );
                      })
                    ) : (
                      <p className="pl-4"> No Product Found </p>
                    )}
                  </div>
                ) : (
                  /* grid view ends */

                  /* list view starts */

                  <div className="mt-8 flex flex-wrap">
                    <div className="flex bg-slate-800 h-16 rounded-lg text-white ml-4  mr-8 rounded-lg w-full items-center content-center">
                      <div className="w-1/5 text-lg text-center ml-[-10px]">
                        {" "}
                        Thumbnail{" "}
                      </div>
                      <div className="w-1/5 text-lg text-center"> Name </div>
                      <div className="w-1/5 text-lg  text-center">
                        {" "}
                        Category{" "}
                      </div>
                      <div className="w-1/5 text-lg text-center"> Price </div>
                      <div className="w-1/5 text-lg text-center"> Cart </div>
                    </div>

                    {!!allData && allData.length > 0 ? (
                      allData.slice(startNum, Show_Num.num).map((data) => {
                        const word_array = data.title.split(" ");

                        const words_show = word_array.slice(0, 3);
                        const befor_sh = words_show.join(" ");

                        return (
                          /* <Card_Shop  product_name={ befor_sh }  product_category={data.category} price={ data.price } image_src={ data.image } /> */

                          <List
                            product_name={befor_sh}
                            product_category={data.category}
                            price={data.price}
                            image_src={data.image}
                            id={data.id}
                          />
                        );
                      })
                    ) : (
                      <p className="pl-4">No Item Found</p>
                    )}
                  </div>
                )}

                <div className="h-8 w-full mt-8 flex justify-between pl-[30px] pr-12">
                  <div>
                    <ul className="">
                      <li
                        className={`inline-flex w-8 h-8 justify-center items-center border-[1px] font-medium cursor-pointer mr-4 bg-slate-900  ${changePagin.one ? "bg-slate-900 text-white" : " bg-white text-slate-900"}`}
                        onClick={() => handleClick(1)}
                      >
                        {" "}
                        1{" "}
                      </li>
                      <li
                        className={`inline-flex w-8 h-8 justify-center items-center border-[1px] font-medium cursor-pointer mr-4 bg-slate-900  ${changePagin.two ? "bg-slate-900 text-white" : " bg-white text-slate-900"}`}
                        onClick={() => handleClick(2)}
                      >
                        {" "}
                        2{" "}
                      </li>
                      <li
                        className={`inline-flex w-8 h-8 justify-center items-center border-[1px] font-medium cursor-pointer mr-4 bg-slate-900  ${changePagin.three ? "bg-slate-900 text-white" : " bg-white text-slate-900"}`}
                        onClick={() => handleClick(3)}
                      >
                        {" "}
                        3{" "}
                      </li>
                      {/* <li className={`inline-flex w-8 h-8 justify-center items-center border-[1px] font-medium cursor-pointer mr-4 bg-slate-900  ${ changePagin.four ? ("bg-slate-900 text-white") : (" bg-white text-slate-900")}`}  onClick= {()=>handleClick(4) } > 4 </li> */}
                    </ul>
                  </div>

                  <div>
                    {" "}
                    <p className="text-base text-gray-500 pt-2">{`Products from ${PaginNum.from} to ${PaginNum.to} of 20`}</p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyContext.Provider>
    </div>
  );
};

export { MyContext, Shop };
