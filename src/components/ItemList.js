import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <section className="pt-20 lg:pt-[20px] pb-10 lg:pb-20 h-full bg-[#F3F4F6] px-5">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
};

export default ItemList;
