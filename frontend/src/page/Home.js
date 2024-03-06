import React from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useEffect, useState, useRef } from "react";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  const categoryList = [...new Set(productData.map((el) => el.category))];
  console.log(categoryList);

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-100 w-36 px-5 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900 py-1">
              Modern Delivery
            </p>
            <img
              src="https://cdn2.iconfinder.com/data/icons/elasto-motorcycle-gear-and-parts/26/motorcycle-512.png "
              className="h-10"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-5">
            Fast as death delivery to{" "}
            <span className="text-red-600 text-">Your Home </span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              className="h-15 flex  bg-slate-100 w-36 px-10 items-center rounded-full py-1 hover:scale-105"
            />
          </h2>
          <p className="py-1">Fish don't eat salt and rotten fish.</p>
          <p className="py-1">
            Owners turn on customers, often the goods are poor.
          </p>
          <p className="py-1">I don't dare to nag customers.</p>
          <p className="py-1">Customers buy, customers ask, I work hard.</p>
          <p className="py-1">
            Brothers and sisters who buy goods, just ask freely for prices, I
            welcome customers very enthusiastically.
          </p>
          <button className="font-bold bg-red-400 hover:bg-green-600 text-slate-200 px-4 py-2 rounded-md hover:scale-105">
            Oder Now With Us
          </button>
        </div>

        <div className=" md:w-1/2 flex flex-wrap gap-5 p-20 justify-center px-9">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-2">
            <button
              onClick={preveProduct}
              className="bg-slate-100 hover:bg-slate-600 text-lg   rounded py-3 p-3 "
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-100 hover:bg-slate-600 text-lg  rounded py-3 p-3"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading...pless wait" key={index + "cartLoading..."} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Your Product"}/>
    </div>
  );
};

export default Home;
