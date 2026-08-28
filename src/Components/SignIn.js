import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SignIn = () => {
  const [addEmail, setAddEmail] = useState("");

  const [showErr, setShowErr] = useState();

  const [showPwd, setShowPwd] = useState();

  const [addPassword, setPassword] = useState("");

  const [showForm, setShowForm] = useState(true);

  console.log(addEmail);

  const setEmail = (e) => {
    setAddEmail(e.target.value);
  };

  const setPwd = (e) => {
    setPassword(e.target.value);
  };

  const checkCredential = (e) => {
    if (addEmail === "") {
      setShowErr(true);
    } else if (addPassword === "") {
      setShowPwd(true);
    } else if (addEmail !== "" || addPassword !== "") {
      setShowForm(false);
    }

    e.preventDefault();
  };

  useEffect(() => {
    if (addPassword !== "") {
      setShowPwd(false);
    } else if (addEmail !== "") {
      setShowErr(false);
    }
  }, [addPassword, addEmail]);

  return (
    <div className="flex h-screen">
      <div className="w-[600px] h-full bg-slate-900 pl-8 pt-32">
        <div>
          <Link to="/">
            <div className="text-white text-3xl font-bold font-sans flex ">
              {" "}
              My<span className="text-rose-600">Shop</span>
            </div>
          </Link>

          <p className="text-white text-xl font-medium mt-4">
            Stay sign in for more
          </p>
          <p className="text-white text-lg font-light  mt-0.5">
            When you sign in, you are with us!
          </p>

          <div className="flex mt-8">
            <div className="mt-2">
              {" "}
              <BsFillCheckCircleFill className="text-green-500" />{" "}
            </div>
            <div className="ml-2 mt-1">
              <p className="text-white text-base font-bold">
                {" "}
                Get started fast with My
                <span className="text-rose-600">Shop</span>{" "}
              </p>
              <p className="text-gray-300 text-md w-72">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                omnis nisi dolor recusandae consectetur!
              </p>
            </div>
          </div>

          <div className="flex mt-4">
            <div className="mt-2">
              {" "}
              <BsFillCheckCircleFill className="text-green-500" />{" "}
            </div>
            <div className="ml-2 mt-1">
              <p className="text-white text-base font-bold">
                {" "}
                Access all OREBI My<span className="text-rose-600">
                  Shop
                </span>{" "}
                services
              </p>
              <p className="text-gray-300 text-md w-72">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                omnis nisi dolor recusandae consectetur!
              </p>
            </div>
          </div>

          <div className="flex mt-4">
            <div className="mt-2">
              {" "}
              <BsFillCheckCircleFill className="text-green-500" />{" "}
            </div>
            <div className="ml-2 mt-1">
              <p className="text-white text-base font-bold">
                {" "}
                Trusted by online Shoppers{" "}
              </p>
              <p className="text-gray-300 text-md w-72">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                omnis nisi dolor recusandae consectetur!
              </p>
            </div>
          </div>

          <div className="flex pl-2 pt-20">
            <div className="text-white text-base">
              <Link to="/">
                {" "}
                My<span className="text-rose-600 mr-2">Shop</span>{" "}
              </Link>
            </div>
            <div className="text-white text-base ml-8 mr-8">
              <Link to="/"> Terms </Link>{" "}
            </div>
            <div className="text-white text-base ml-8 mr-8">
              {" "}
              <Link to="/"> Privacy </Link>
            </div>
            <div className="text-white text-base ml-8 mr-8">
              {" "}
              <Link to="/"> Security </Link>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center">
        <div>
          {showForm ? (
            <div>
              {" "}
              <p className="text-slate-900 text-4xl font-semibold underline-offset-4 underline decoration-[2px] decoration-[text-gray-900] ">
                {" "}
                Sign In{" "}
              </p>
              <div className="mt-6">
                <form noValidate>
                  <label className="mt-2 text-gray-600 text-lg font-medium">
                    {" "}
                    Work Email{" "}
                  </label>
                  <input
                    type="email"
                    value={addEmail}
                    required
                    onChange={setEmail}
                    className="pl-2 outline-none placeholder:text-sm w-[380px] border block mt-2 p-2 rounded-lg  border-gray-500 border-2px"
                    placeholder="john@workmail.com"
                  />

                  {showErr ? (
                    <p className="text-base text-rose-500 pt-1 px-2">
                      {" "}
                      <span className="italic">!</span>&nbsp; Enter an
                      Email{" "}
                    </p>
                  ) : null}

                  <label className="text-gray-600 text-lg font-medium mt-3 block">
                    {" "}
                    Password
                  </label>
                  <input
                    type="password"
                    value={addPassword}
                    required
                    className="pl-2 outline-none placeholder:text-sm w-[380px] border block mt-2 p-2 rounded-lg  border-gray-500 border-2px"
                    placeholder="Enter Password"
                    onChange={setPwd}
                  />

                  {showPwd ? (
                    <p className="text-base text-rose-500 pt-1 px-2">
                      {" "}
                      <span className="italic">!</span>&nbsp; Enter your
                      password{" "}
                    </p>
                  ) : null}

                  <button
                    className="bg-slate-900 text-gray-100 w-[380px] text-center p-2 mt-8 rounded-md text-lg"
                    onClick={checkCredential}
                  >
                    {" "}
                    Sign In{" "}
                  </button>
                </form>

                <p className="w-[380px] text-center text-slate-900 mt-4 mb-4">
                  Don't have an Account?
                  <Link to="/signup">
                    <span className="font-medium underline"> Sign up </span>
                  </Link>
                </p>
              </div>{" "}
            </div>
          ) : (
            <div className="w-96">
              <p className="text-lg w-96 text-green-600 text-center">
                Hello dear, Thank you for your attempt. We are processing to
                validate your access. Till then stay connected and additional
                assistance will be sent to you by your mail at{" "}
                <span className="font-bold text-rose-500">{addEmail} </span>
              </p>

              <Link to="/signup">
                <button className="bg-slate-900 text-gray-100 w-80 block m-auto text-center p-2 mt-8 rounded-md text-lg">
                  {" "}
                  Sign Up{" "}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
