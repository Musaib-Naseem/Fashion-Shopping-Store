import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./AllComponent.css";
import { MdLocalShipping } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Card from "./Card";
import prod1 from "../images/prod1.webp";
import prod2 from "../images/prod2.webp";
import prod3 from "../images/prod3.webp";
import prod4 from "../images/prod4.webp";
import sp_one from "../images/sp_one.webp";
import sp_Two from "../images/sp_Two.webp";
import sp_Three from "../images/sp_Three.webp";
import sp_Four from "../images/sp_Four.webp";
import clock_img from "../images/clock_img.webp";
import bannerImgOne from "../images/bannerImgOne.webp";
import bannerImgTwo from "../images/bannerImgTwo.webp";
import bannerImgThree from "../images/bannerImgThree.webp";
import saleImgOne from "../images/saleImgOne.webp";
import saleImgTwo from "../images/saleImgTwo.webp";
import saleImgThree from "../images/saleImgThree.webp";
import OneSlide from "../images/1st-slid-image.jpg";
import smartWatch from "../images/smart-watch.jpg";
import thirdSlide from "../images/3rd_slide.jpg";
import clothBasket from "../images/cloth-basket.jpg";

const Home = () => {
  // const [dotActive,setDotActive] = useState(0);

  const [dotActive, setDocActive] = useState(0);

  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoSpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoSpeed: 1000,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "58%",
          left: "-40%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "1px 0",
                cursor: "pointer",
                fontSize: "18px",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
                marginTop: "10px",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div
      style={{
        height: "auto",
        paddingTop: "80px",
        backgroundColor: "",
        overflow: "hidden",
        marginBottom: "130px",
      }}
    >
      <div className="mx-auto">
        {/* <h1 style={{ color:"#000"}}>  Home </h1> */}

        <Slider {...settings} className=" relative z-1">
          <div>
            {" "}
            <Link to="/shop">
              {" "}
              <img alt="" src={bannerImgOne} />{" "}
            </Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/shop">
              {" "}
              <img alt="" src={bannerImgTwo} />{" "}
            </Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/shop">
              {" "}
              <img alt="" src={bannerImgThree} />{" "}
            </Link>{" "}
          </div>
          {/* Add more slides here */}
        </Slider>

        <div className="border-b-[1px]">
          <div className="container px-12 mx-auto ">
            <div className="flex justify-between h-28 items-center my-auto">
              <div>
                {" "}
                <p className="text-lg text-slate-800 hover:shadow-lg p-1 pl-2 pr-2">
                  {" "}
                  <span className="font-bold text-[28px]">2</span> Years
                  Warranty{" "}
                </p>
              </div>

              <div>
                {" "}
                <p className="text-lg text-slate-800 hover:shadow-lg p-1 pl-2 pr-2">
                  <MdLocalShipping className="inline-block text-xl" /> &nbsp;
                  Free shipping{" "}
                </p>{" "}
              </div>

              <div>
                {" "}
                <p className="text-lg text-slate-800 hover:shadow-lg p-1 pl-2 pr-2">
                  <IoMdRefresh className="inline-block text-xl" /> Return policy
                  in 30 days
                </p>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto container mx-auto px-12 mt-16">
          <div className="flex flex-row w-full gap-8">
            <div className="w-1/2 h-24 bg-slate-500">
              <Link to="/shop">
                <img alt="" src={saleImgOne} />
              </Link>
            </div>

            <div className="w-1/2 h-24 flex flex-col gap-10">
              <div>
                {" "}
                <Link to="/shop">
                  <img alt="" src={saleImgTwo} />{" "}
                </Link>{" "}
              </div>

              <div>
                {" "}
                <Link to="/shop">
                  {" "}
                  <img alt="" src={saleImgThree} />{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className=" md:mt-[550px]  2xl:mt-[685px]">
            <p className="text-3xl font-bold text-slate-900"> New Arrivals </p>

            <Slider
              {...settings2}
              className=" relative z-1 mt-8  overflow-hidden pl-12 ml-[-40px]"
            >
              <Link to="/shop">
                {" "}
                <Card
                  product_name="Round Table Watch"
                  new="true"
                  product_color="Black and White"
                  price="$44.00"
                  image_src={OneSlide}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Smart Watch"
                  new="true"
                  product_color="Black"
                  price="$30.00"
                  image_src={smartWatch}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Cloth Basket"
                  product_color="Mixed"
                  price="$80.00"
                  image_src={clothBasket}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Funny Toys for Babies"
                  new="true"
                  product_color="Mixed"
                  price="$60.00"
                  image_src={thirdSlide}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Round Table Watch"
                  new="true"
                  product_color="Black and White"
                  price="$44.00"
                  image_src={OneSlide}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Smart Watch"
                  product_color="Black"
                  price="$30.00"
                  image_src={smartWatch}
                />{" "}
              </Link>
            </Slider>
          </div>

          <div className="xl:mt-[70px] md:mt-[-30px]">
            <p className="text-3xl font-bold text-slate-900">
              {" "}
              Our Bestsellers{" "}
            </p>

            <div className="relative z-1 mt-[40px]  flex overflow-hidden pl-12 ml-[-48px] justify-between ">
              <Link to="/shop">
                {" "}
                <Card
                  product_name="Flower Base"
                  new="true"
                  product_color="Black and White"
                  price="$35.00"
                  image_src={prod1}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="New Backpack"
                  new="true"
                  product_color="Gray"
                  price="$180.00"
                  image_src={prod2}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Household materials"
                  product_color="Mixed"
                  price="$80.00"
                  image_src={prod3}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Travel Bag"
                  product_color="Black"
                  price="$220.00"
                  image_src={prod4}
                />{" "}
              </Link>
            </div>
          </div>

          <div className="xl:mt-[70px] md:mt-[-30px] ">
            <div className="relative">
              <img alt="" src={clock_img} />

              <div className="absolute w-[520px] xl:top-[80px] md:top-[25px] right-20">
                <p className="text-3xl text-slate-900 font-bold transform-uppercase">
                  Product of the year
                </p>
                <p className="text-slate-700 text-base mt-4 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat cupiditate modi amet! Facilis, aperiam quaerat.
                </p>
                <Link to="/shop">
                  <button className="w-40 h-12 flex justify-center items-center text-white bg-slate-900 text-base mt-[24px]">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-[70px]">
            <p className="text-3xl font-bold text-slate-900">
              {" "}
              Special Offers{" "}
            </p>

            <div className="relative z-1 mt-[40px]  flex overflow-hidden pl-12 ml-[-48px] justify-between ">
              <Link to="/shop">
                {" "}
                <Card
                  product_name="Cap for Boys "
                  new="true"
                  product_color="Black and White"
                  price="$35.00"
                  image_src={sp_one}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Tea Table"
                  product_color="Mixed"
                  price="$150.00"
                  image_src={sp_Two}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Headphones"
                  product_color="Mixed"
                  price="$50.00"
                  image_src={sp_Three}
                />{" "}
              </Link>

              <Link to="/shop">
                {" "}
                <Card
                  product_name="Sun glasses"
                  new="true"
                  product_color="Black"
                  price="$90.00"
                  image_src={sp_Four}
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
