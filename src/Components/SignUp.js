import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [errFull, setErrFull] = useState(false);
  const [Passwrd, setPasswrd] = useState("");
  const [errPasswrd, setErrPasswrd] = useState(false);
  const [PhnNumber, setPhnNumber] = useState("");
  const [errPhnNumber, setErrPhnNumber] = useState(false);
  const [Address, setAddress] = useState("");
  const [errAdd, setErrAdd] = useState(false);
  const [newEmail, setnewEmail] = useState("");
  const [errNewEmail, setErrNewEmail] = useState(false);
  const [checked, setChecked] = useState(false);
  const checkedStyle = "bg-gray-800 cursor-pointer";
  const [enabButton, setEnabButton] = useState(false);
  const [showSignMessage, setShowSignMessage] = useState(true);

  console.log(checked);

  const checkForm = (e) => {
    e.preventDefault();

    let hasError = false;

    if (fullName === "") {
      setErrFull(true);
      hasError = true;
    }

    if (newEmail === "") {
      setErrNewEmail(true);
      hasError = true;
    }

    if (PhnNumber === "") {
      setErrPhnNumber(true);
      hasError = true;
    }

    if (Passwrd === "") {
      setErrPasswrd(true);
      hasError = true;
    }

    if (Address === "") {
      setErrAdd(true);
      hasError = true;
    }

    if (!checked) {
      hasError = true;
    }

    if (!hasError) {
      setShowSignMessage(false);
    }
  };

  const UpdateFull = (e) => {
    setFullName(e.target.value);
  };

  const UpdateEmail = (e) => {
    setnewEmail(e.target.value);
  };

  const UpdatePwd = (e) => {
    setPasswrd(e.target.value);
  };

  const UpdatePhn = (e) => {
    setPhnNumber(e.target.value);
  };

  const UpdateAdd = (e) => {
    setAddress(e.target.value);
  };

  const HandleChecked = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    if (fullName !== "") {
      setErrFull(false);
    }
  }, [fullName]);

  useEffect(() => {
    if (newEmail !== "") {
      setErrNewEmail(false);
    }
  }, [newEmail]);

  useEffect(() => {
    if (PhnNumber !== "") {
      setErrPhnNumber(false);
    }
  }, [PhnNumber]);

  useEffect(() => {
    if (Passwrd !== "") {
      setErrPasswrd(false);
    }
  }, [Passwrd]);

  useEffect(() => {
    if (Address !== "") {
      setErrAdd(false);
    }
  }, [Address]);

  useEffect(() => {
    if (
      Address !== "" &&
      fullName !== "" &&
      newEmail !== "" &&
      PhnNumber !== "" &&
      Passwrd !== "" &&
      checked === true
    ) {
      setEnabButton(true);
    } else {
      setEnabButton(false);
    }
  }, [fullName, Address, Passwrd, PhnNumber, checked, newEmail]);

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
                Access all My<span className="text-rose-600">Shop</span>{" "}
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
        {showSignMessage ? (
          <div>
            <p className="text-slate-900 text-4xl font-semibold underline-offset-4 underline decoration-[2px] decoration-[text-gray-900] ">
              {" "}
              Create your account{" "}
            </p>

            <div className="mt-8">
              <form noValidate>
                <label className="mt-2 text-gray-600 text-lg font-medium">
                  {" "}
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  value={fullName}
                  required
                  className="outline-none placeholder:text-sm w-[410px] border block mt-2 p-2 rounded-lg  border-gray-500 border-2px"
                  onChange={UpdateFull}
                  placeholder="eg. John Doe"
                />
                {errFull ? (
                  <p className="text-base text-rose-500 pt-1 px-2">
                    {" "}
                    <span className="italic">!</span>&nbsp; Enter Your Full
                    Name{" "}
                  </p>
                ) : null}

                <label className="text-gray-600 text-lg font-medium mt-3 block">
                  {" "}
                  Work Email{" "}
                </label>
                <input
                  type="email"
                  value={newEmail}
                  required
                  className="outline-none placeholder:text-sm w-[410px] border block mt-2 p-2 rounded-lg  border-gray-500 border-2px"
                  onChange={UpdateEmail}
                  placeholder="john@workmail.com"
                />
                {errNewEmail ? (
                  <p className="text-base text-rose-500 pt-1 px-2">
                    {" "}
                    <span className="italic">!</span>&nbsp; Enter Your
                    Email{" "}
                  </p>
                ) : null}

                <label className="text-gray-600 text-lg font-medium mt-3 block">
                  {" "}
                  Phone Number{" "}
                </label>
                <input
                  type="number"
                  value={PhnNumber}
                  required
                  className="outline-none placeholder:text-sm w-[410px] border block mt-2 p-2 rounded-lg  border-gray-500 border-2px"
                  onChange={UpdatePhn}
                  placeholder="00824564854685"
                />
                {errPhnNumber ? (
                  <p className="text-base text-rose-500 pt-1 px-2">
                    {" "}
                    <span className="italic">!</span>&nbsp; Enter Your Phone
                    Number{" "}
                  </p>
                ) : null}

                <label className="text-gray-600 text-lg font-medium mt-3 block">
                  {" "}
                  Password
                </label>
                <input
                  type="password"
                  value={Passwrd}
                  required
                  className="outline-none placeholder:text-sm w-[410px] border block mt-2 p-2 rounded-lg  border-gray-500 border-2px"
                  onChange={UpdatePwd}
                  placeholder="Create Password"
                />
                {errPasswrd ? (
                  <p className="text-base text-rose-500 pt-1 px-2">
                    {" "}
                    <span className="italic">!</span>&nbsp; Create Your
                    Password{" "}
                  </p>
                ) : null}

                <label className="text-gray-600 text-lg font-medium mt-3 block">
                  {" "}
                  Address{" "}
                </label>
                <input
                  type="text"
                  value={Address}
                  required
                  className="outline-none placeholder:text-sm w-[410px] border block mt-2 p-2 rounded-lg  border-gray-500 border-2px"
                  onChange={UpdateAdd}
                  placeholder="road 001,house-115,example"
                />
                {errAdd ? (
                  <p className="text-base text-rose-500 pt-1 px-2">
                    {" "}
                    <span className="italic">!</span>&nbsp; Enter Your
                    Address{" "}
                  </p>
                ) : null}

                <p className="text-sm mt-4 w-[440px] flex items-center">
                  {" "}
                  <input
                    required
                    type="checkbox"
                    className="cursor-pointer w-4 h-4 outline-none"
                    onClick={HandleChecked}
                  />{" "}
                  &nbsp; I agree to the My
                  <span className="text-rose-600">Shop</span>{" "}
                  <Link to="/">
                    <span className="text-sky-700">
                      &nbsp; Terms of Service{" "}
                    </span>
                  </Link>{" "}
                  &nbsp; and{" "}
                  <Link to="/">
                    <span className="text-sky-700">&nbsp; Privacy Policy</span>
                  </Link>
                  .
                </p>

                <button
                  className={` text-gray-100 w-[410px] text-center p-2 mt-8 rounded-md text-lg  ${enabButton ? checkedStyle : "bg-slate-400 cursor-not-allowed disabled "}`}
                  disabled={!enabButton ? "disabled" : ""}
                  onClick={enabButton ? checkForm : () => {}}
                >
                  {" "}
                  Create Account{" "}
                </button>
              </form>

              <p className="w-[380px] text-center text-slate-900 mt-4 mb-4">
                Already have an Account?{" "}
                <Link to="/signin">
                  <span className="font-medium underline"> Sign in </span>
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-96">
              <p className="text-green-500 text-lg text-center">
                Hello dear {fullName}, Welcome you to WeShop Admin panel. We
                received your Sign up request. We are processing to validate
                your access. Till then stay connected and additional assistance
                will be sent to you by your mail at {newEmail}.com
              </p>

              <Link to="/signin">
                <button className="bg-slate-900 text-lg text-white p-2 w-96 text-center rounded-sm mt-4">
                  {" "}
                  Sign In{" "}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
