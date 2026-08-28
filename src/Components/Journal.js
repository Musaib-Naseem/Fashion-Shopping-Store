import React from "react";
import {IoIosArrowForward} from "react-icons/io";
import { Link } from "react-router-dom";
import {FiArrowRight} from "react-icons/fi";

const Journal=()=>{
    return(

        <div className="pt-40 h-auto pb-40">
        
        <div className="container mx-auto px-12">
        
        <h1 className="text-4xl font-extrabold">  Journal </h1>
        
        <p className="text-base mt-3 text-sm"><Link className="text-neutral-500 text-sm" to="/" >Home</Link>  <IoIosArrowForward className="inline-block text-sm"/> <span className="text-slate-900 text-sm"> Journal </span></p>
        
        
        <div className="mt-12 w-1/2" >
        
        <p className="text-xl text-gray-500 font-normal">
        <span className="font-medium text-gray-900">My</span><span className="text-rose-600">Shop</span> is one of the world's leading ecommerce brands and is internationally recognized
         for celebrating the essence of classic Worldwide cool looking style.
        </p>
        
        <Link to="/shop"><button className="bg-zinc-900 text-lg text-white p-2 px-4 mt-6 rounded-sm">Continue Shopping &nbsp;<FiArrowRight className="inline-block"/></button></Link>
        
        
        </div>
        
        
        </div>
        
        </div>
        
        
        )


}


export default Journal;