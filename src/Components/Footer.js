import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="h-auto w-full bg-slate-100 pb-8 ">
        <div className="container mx-auto px-12 flex justify-between pt-12">
          <div className="w-72">
            <p className="text-lg text-slate-950 font-semibold">
              {" "}
              More about My<span className="text-rose-600">Shop</span>{" "}
            </p>
            <p className="text-base text-slate-700 pt-5 w-80">
              {" "}
              MyShop one of the world's leading ecommerce brands and is
              internationally recognized for celebrating the essence of classic
              Worldwide cool looking style.{" "}
            </p>

            <ul className="flex align-center gap-2 mt-6">
              <a href="/shop">
                <li class="w-7 h-7 rounded-full bg-black flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="#fff"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </li>
              </a>
              <a href="/shop">
                {" "}
                <li class="w-7 h-7 rounded-full bg-black flex justify-center align-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="#fff"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </li>
              </a>
              <a href="/shop">
                <li class="w-7 h-7 rounded-full bg-black flex justify-center align-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="#fff"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </li>
              </a>
              <a href="/shop">
                <li class="w-7 h-7 rounded-full bg-black flex justify-center align-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="#fff"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </li>
              </a>
            </ul>
          </div>

          <div className="w-40">
            <Link to="/shop">
              {" "}
              <p className="text-lg text-slate-950 font-semibold">
                {" "}
                Shops{" "}
              </p>{" "}
            </Link>

            <Link to="/shop">
              {" "}
              <p className="text-slate-600 pt-5 text-base hover:underline cursor-pointer">
                {" "}
                Accessories{" "}
              </p>{" "}
            </Link>

            <Link to="/shop">
              <p className="text-slate-600 pt-4 text-base hover:underline cursor-pointer">
                {" "}
                Clothes{" "}
              </p>{" "}
            </Link>

            <Link to="/shop">
              <p className="text-slate-600 pt-4 text-base hover:underline cursor-pointer">
                {" "}
                Electronics{" "}
              </p>{" "}
            </Link>

            <Link to="/shop">
              <p className="text-slate-600 pt-4 text-base hover:underline cursor-pointer">
                {" "}
                Home appliances{" "}
              </p>{" "}
            </Link>

            <Link to="/shop">
              <p className="text-slate-600 pt-4 text-base hover:underline cursor-pointer">
                {" "}
                New Arrivals{" "}
              </p>{" "}
            </Link>
          </div>

          <div className="w-40">
            <Link to="/signin">
              <p className="text-lg text-slate-950 font-semibold">
                {" "}
                Your account{" "}
              </p>
            </Link>

            <Link to="/signin">
              <p className="text-slate-600 pt-5 text-base hover:underline cursor-pointer">
                {" "}
                Profile{" "}
              </p>
            </Link>

            <Link to="/signin">
              <p className="text-slate-600 pt-4 text-base hover:underline cursor-pointer">
                {" "}
                Orders{" "}
              </p>
            </Link>

            <Link to="/signin">
              <p className="text-slate-600 pt-4 text-base hover:underline cursor-pointer">
                {" "}
                Addresses{" "}
              </p>{" "}
            </Link>

            <Link to="/signin">
              <p className="text-slate-600 pt-4 text-base hover:underline cursor-pointer">
                {" "}
                Account Details{" "}
              </p>{" "}
            </Link>

            <Link to="/signin">
              <p className="text-slate-600 pt-4 text-base hover:underline cursor-pointer">
                {" "}
                Payment Options{" "}
              </p>{" "}
            </Link>
          </div>

          <div className="w-96 ">
            <p className="text-lg text-slate-950 font-semibold">
              {" "}
              Subscribe to our newsletter.{" "}
            </p>
            <p className="text-base text-slate-700 pt-5 w-80">
              {" "}
              For exclusive recipes ,discounts,opportunities and new products
              announcements - plus a few surprise.{" "}
            </p>

            <input
              type="text"
              className="w-60 bg-white rounded-sm h-50 p-2 mt-4 outline-none border-b-2 pl-4"
              placeholder="Enter Your Email"
            />

            <button className="bg-gray-800 w-24 rounded-sm h-50 text-white ml-0 text-center p-2">
              {" "}
              Subscribe{" "}
            </button>

            <p className="mt-8 ">
              {" "}
              <img
                alt=""
                className="text-center"
                src="https://front.dreamstime.com/img/cards-icons.png"
              />
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-20 mp px-8">
          <hr className="bg-slate-900 " />

          <p className="text-slate-700 text-center mt-8">
            {" "}
            Copyright 2023 &nbsp;|&nbsp; MyShop shopping &nbsp;|&nbsp; All
            Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
