import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem, increaseQty,decreaseQty } from "../redux/productSlide";



const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch()
  const handleAddCartProduct = (e) => {
   dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      category : category,
      image : image
    }))
    
  };

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-4 px-5 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-20 flex flex-col justify-center items-center">
              <img
                src={image}
                className="h-full bg-white shadow-md p-2 rounded min-w-[10px] w-40 min-h-[120px] hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-slate-1000 text-center capitalize text-lg  w-35 py-5 whitespace-nowrap ">
              {name}
            </h3>
            <p className="font-semibold text-slate-400  capitalize text-lg ">
              -{category}
            </p>
            <p className="font-bold"> 
            <span className="font-semibold text-slate-400  capitalize text-lg  ">=</span>
             <span> {price} </span>
            </p>
            </Link>
            <button className="bg-yellow-500 py-2 mt-1 rounded hover:bg-yellow-200 w-full" onClick={handleAddCartProduct}>
              Add Cart
            </button>
            
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
