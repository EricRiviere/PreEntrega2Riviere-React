import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const ItemDetail = ({
  id,
  name,
  image,
  category,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = { id, name, price, image };

    addItem(item, quantity);
  };

  return (
    <section className="pt-20 lg:pt-[20px] pb-10 lg:pb-20 h-full bg-[#F3F4F6] px-4 sm:px-40 md:px-60 lg:px-96">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"></div>
      <div className="overflow-hidden bg-white rounded-lg ">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
            {name}
          </h3>
          <div className="flex justify-center">
            <p className="leading-relaxed mr-5 mb-2 text-body-color">
              Price: {price}$
            </p>
            <p className="leading-relaxed mr-5 mb-2 text-body-color">
              Stock: {stock}
            </p>
            <p className="leading-relaxed mb-2 text-body-color">
              Category: {category}
            </p>
          </div>
          <div className="flex justify-center">
            <p className="leading-relaxed mr-5 mb-2 text-body-color">
              {description}
            </p>
          </div>
          <div>
            {quantityAdded > 0 ? (
              <Link to="/cart">
                <button className="inline-block rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white">
                  Go to Cart
                </button>
              </Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
