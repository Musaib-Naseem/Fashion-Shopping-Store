import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProfButton = () => {
  const Items = useSelector((state) => state);

  const finalItems = Items.allItems.items;

  console.log(finalItems);

  return (
    <div className="relative z-40">
      <div className=" fixed right-2 top-64">
        <Link to="/signin">
          <button className="h-20 w-20 bg-white rounded    right-1 top-64  shadow-md flex items-center justify-center border-2 ">
            <div className="flex flex-col align-center justify-center">
              <p className="w-6 h-6 mx-auto pl-2">
                <svg
                  className="fill-slate-600"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  class="fill-slate-600 text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H8v-1.5c0-1.99 4-3 6-3s6 1.01 6 3V16z"></path>
                </svg>
              </p>{" "}
              <p className="text-slate-800 pt-1 text-sm"> Profile </p>
            </div>
          </button>
        </Link>

        <Link to="/Cart">
          <button
            className="h-20 w-20 bg-white rounded right-1 shadow-md flex items-center justify-center border-2 p-"
            style={{ marginTop: "22px" }}
          >
            {/* Center content vertically and horizontally */}
            <div className="flex flex-col items-center justify-center">
              <p className="w-6 h-6 mx-auto pl-2">
                <svg
                  className="fill-slate-600 w-6 h-6"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="fill-slate-600 text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                  </g>
                </svg>
              </p>
              <p className="text-slate-800 pt-1 text-sm">My Bag</p>
              <p
                className="text-white bg-red-500 flex items-center justify-center font-bold rounded-full w-[20px] h-[20px] text-sm absolute t-0"
                style={{
                  marginTop: "-43px",
                  marginRight: "-44px",
                  padding: "12px",
                }}
              >
                {" "}
                {finalItems.length}{" "}
              </p>
            </div>
          </button>
        </Link>

        {/* <button className="h-20 w-20 bg-white rounded  top-96 right-1 shadow-md flex items-center justify-center border-2 fixed">
 
 <div>
<p >< svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H8v-1.5c0-1.99 4-3 6-3s6 1.01 6 3V16z"></path></svg></p>
 <p className="text-slate-600"> Buy Now </p>
 </div>
</button> */}
      </div>
    </div>
  );
};

export default ProfButton;
