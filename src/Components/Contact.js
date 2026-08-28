import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(formData.name);
  console.log(formData.email);
  console.log(formData.message);

  const handleFormData = (fieldName, value) => {
    if (fieldName === "name") {
      setFormData({ ...formData, name: value });
    } else if (fieldName === "email") {
      setFormData({ ...formData, email: value });
    } else if ((fieldName = "message")) {
      setFormData({ ...formData, message: value });
    }
  };

  const CheckFormData = () => {
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      console.log("You will receive message soon");

      setShowMessage(false);
    } else {
      console.log(" Fill up the field ");
    }
  };

  console.log(formData.message);

  return (
    <div className="pt-40 h-auto pb-40">
      <div className="container mx-auto px-12">
        <h1 className="text-4xl font-extrabold"> Contact </h1>

        <p className="text-base mt-3 text-sm">
          <Link className="text-neutral-500 text-sm" to="/">
            Home
          </Link>{" "}
          <IoIosArrowForward className="inline-block text-sm" />{" "}
          <span className="text-slate-900 text-sm"> Contact </span>
        </p>

        {showMessage ? (
          <div>
            <h2 className="mt-12 font-bold text-xl text-3xl">Fill up a Form</h2>

            <div className="mt-8 w-1/3">
              <form onSubmit={CheckFormData}>
                <p className="text-slate-900 text-base font-bold"> Name </p>
                <div class="relative">
                  <input
                    required
                    type="text"
                    id="name"
                    class="block rounded-t- pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer "
                    placeholder="Enter Your Name Here"
                    onChange={(e) => handleFormData("name", e.target.value)}
                  />
                  {/* <label for="name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]  peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"> Enter Your Name Here </label> */}
                </div>

                <p className="text-slate-900 text-base mt-8 font-bold">
                  {" "}
                  Email{" "}
                </p>
                <div class="relative">
                  <input
                    required
                    type="email"
                    id="email"
                    class="block rounded-t- pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                    placeholder=" Enter Your Email Here "
                    onChange={(e) => handleFormData("email", e.target.value)}
                  />
                  {/* <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]  peer-focus:text-gray-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"> Enter Your Email Here </label> */}
                </div>

                <p className="text-slate-900 text-base mt-8 font-bold">
                  {" "}
                  Messages{" "}
                </p>
                <div class="relative w-auto">
                  <textarea
                    required
                    type="text"
                    rows="3"
                    id="message"
                    class=" block rounded-t- pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                    placeholder="Enter Your Message Here"
                    onChange={(e) => handleFormData("message", e.target.value)}
                  ></textarea>
                  {/* <label for="message" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]  peer-focus:text-gray-600  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"> Enter Your Message Here </label> */}
                </div>

                <button
                  className="bg-zinc-900 text-lg p-2 text-white px-16 mt-16 rounded-sm"
                  onClick={CheckFormData}
                >
                  {" "}
                  Post Now &nbsp;&nbsp;
                  <FiArrowRight className="inline-block" />{" "}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="pt-20 pb-20 flex justify-center mt-16">
            <div>
              <p className="text-lg w-[550px] text-green-600 text-center">
                Hello <span className="text-rose-600">{formData.name},</span>{" "}
                Welcome you to WeShop. We received your Contact request. We are
                processing to validate your access. Till then stay connected and
                additional assistance will be sent to you by your mail at{" "}
                <span className="text-rose-400">{formData.email} </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
