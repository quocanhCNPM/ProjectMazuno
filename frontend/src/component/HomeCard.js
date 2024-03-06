import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading, id }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[100px] ">
      {name ? (
        <>
        <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
          <div className="w-40 min-h-[120px]">
            <img src={image} className="hover:scale-105" />
          </div>
          <h3 className="font-semibold text-slate-1000 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="font-semibold text-slate-400  capitalize text-lg">
            -{category}
          </p>
          <p className="font-semibold text-slate-400  capitalize text-lg">
            ={price}
          </p>
          </Link>
        </>
      )
    :
    <div className="">
<p>{loading}</p>
    </div>
    
    }
    </div>
  );
};

export default HomeCard;
