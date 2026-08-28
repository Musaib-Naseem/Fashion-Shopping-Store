import React, { useReducer } from "react";
import { Link, useLocation } from "react-router-dom";

// import {Home} from "./Home";

const Header = () => {
  // const [active,setActive] = useState(false);

  const location_head = useLocation();

  const isLocation = location_head.pathname === "/shop";

  console.log(isLocation);

  const margTp = isLocation ? { marginTop: "0px" } : { marginTop: "0px" };

  console.log(margTp);

  const reducer = (state, action) => {
    switch (action.type) {
      case "home":
        return {
          home: true,
          shop: false,
          about: false,
          contact: false,
          journal: false,
        };

      case "shop":
        return {
          home: false,
          shop: true,
          about: false,
          contact: false,
          journal: false,
        };

      case "about":
        return {
          home: false,
          shop: false,
          about: true,
          contact: false,
          journal: false,
        };

      case "contact":
        return {
          home: false,
          shop: false,
          about: false,
          contact: true,
          journal: false,
        };

      case "journal":
        return {
          home: false,
          shop: false,
          about: false,
          contact: false,
          journal: true,
        };

      default:
        return state;
    }
  };

  const [dispatch] = useReducer(reducer, {
    home: false,
    shop: false,
    about: false,
    contact: false,
    journal: false,
  });

  return (
    <div>
      <div
        className="bg-white border-b border-slate-200 h-20 flex items-center fixed w-full z-50"
        style={margTp}
      >
        <div className="container mx-auto my-auto flex justify-between px-12">
          <Link to="/">
            <div className="text-black text-2xl font-bold font-sans flex ">
              {" "}
              My<span className="text-rose-600">Shop</span>
            </div>
          </Link>

          <div className="text-black flex ">
            <Link
              to="/"
              className={`text-lg txt_primary_col pr-8 cursor-pointer hover:text-rose-600 hover:underline underline-offset-4 ${location_head.pathname === "/" ? "active" : ""}`}
              onClick={() => dispatch({ type: "home" })}
            >
              Home
            </Link>

            <Link
              to="/shop"
              className={`text-lg txt_primary_col pr-8 cursor-pointer hover:text-rose-600  hover:underline underline-offset-4 ${location_head.pathname === "/shop" ? "active" : ""}`}
              onClick={() => dispatch({ type: "shop" })}
            >
              Shop
            </Link>

            <Link
              to="about"
              className={`text-lg txt_primary_col pr-8 cursor-pointer hover:text-rose-600 hover:underline underline-offset-4 ${location_head.pathname === "/about" ? "active" : ""}`}
              onClick={() => dispatch({ type: "about" })}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-lg txt_primary_col pr-8 cursor-pointer hover:text-rose-600 hover:underline underline-offset-4 ${location_head.pathname === "/contact" ? "active" : ""}`}
              onClick={() => dispatch({ type: "contact" })}
            >
              Contact
            </Link>

            <Link
              to="/journal"
              className={`text-lg txt_primary_col pr-8 cursor-pointer hover:text-rose-600 hover:underline underline-offset-4 ${location_head.pathname === "/journal" ? "active" : ""}`}
              onClick={() => dispatch({ type: "journal" })}
            >
              Journal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
