import React, { useContext, useRef } from "react";
import "./home.css";
import { IoMdCloseCircle } from "react-icons/io";
import { GlobalContext } from "../context/context";

const Home = () => {
  const {
    setName,
    name,
    isDescOpen,
    openDesc,
    closeDesc,
    products,
    handleAddItemToStorage,
  } = useContext(GlobalContext);

  const searchValue = useRef("");

  const handleSearch = (e) => {
    e.preventDefault();
    setName(searchValue.current.value);
  };

  const filteredProducts = products.filter((productItem) =>
    productItem.title.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="search-container">
        <form>
          <input ref={searchValue} type="text" placeholder="  Search" />
          <button type="submit" onClick={handleSearch}>
            Submit
          </button>
        </form>
      </div>
      <div className="products-cover">
        {filteredProducts.map((productItem) => {
          const { id, title, price, description, images } = productItem;
          return (
            <section key={id} className="products-container">
              <img src={images} alt="images" />
              <h5>
                {title} <span onMouseOver={() => openDesc(id)}>Desc...</span>
              </h5>
              <div className="products-price-btn">
                <h4>Price: {price}</h4>
                <button onClick={() => handleAddItemToStorage(productItem)}>
                  Add To Storage
                </button>
              </div>
              <div
                className={`${isDescOpen === id ? "show-desc" : "hide-desc"}`}
              >
                <p>{description}</p>
                <button onClick={closeDesc} className="close-desc-btn">
                  <IoMdCloseCircle />
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
