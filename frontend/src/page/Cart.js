import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );

  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      <div className="my-4 flex gap-3">
        {/* display cart items  */}
        <div className="w-full max-w-3xl ">
          {productCartItem.map((el) => {
            return (
              <CartProduct
                key={el._id}
                id={el._id}
                name={el.name}
                image={el.image}
                category={el.category}
                qty={el.qty}
                total={el.total}
                price={el.price}
              />
            );
          })}
        </div>

        {/* total cart item  */}
        <div className="w-full max-w-md  ml-auto">
          <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
          <div className="flex w-full py-2 text-lg border-b">
            <p>Total Qty :</p>
            <p className="ml-auto w-32 font-bold"> {totalQty}</p>
          </div>
          <div className="flex w-full py-2 text-lg border-b">
            <p>Total Price</p>
            <p className="ml-auto w-32 font-bold">
              <span className="text-red-500">₹</span> {totalPrice}
            </p>
          </div>
          <button className="bg-red-500 w-full text-lg font-bold py-2 text-white">
            Payment
          </button>
        </div>
      </div>

      <>
        <div className="flex w-full justify-center items-center flex-col">
          <img src={""} className="w-full max-w-sm" />
          <p className="text-slate-500 text-3xl font-bold py-7">Empty Cart</p>
          <div
            className="flex gap-10 py-10 bg-slate-100 w-100 px-30 items-center rounded-full hover:scale-105 "
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })} //khi click vào đưua lên trang đầu
          >
            <img
              src="https://static.thenounproject.com/png/538404-200.png "
              className="h-500"
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default Cart;
