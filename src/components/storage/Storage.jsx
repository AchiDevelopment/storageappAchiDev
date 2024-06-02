import React, { useContext } from "react";
import "./storage.css";
import { GlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const Storage = () => {
  const { storage, amount, totalPrice, handleDelete } =
    useContext(GlobalContext);
  if (storage.length === 0) {
    return (
      <div className="empty-storage-container">
        <h1 className="empty-storage-heading">Your Storage Is Empty</h1>
        <Link to={"/"}>
          <button className="empty-storage-btn">Home Page</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="storage-container">
      <div className="storage-heading">
        <h2>Number Of Products {amount}</h2>
        <h2>Total Price {totalPrice}</h2>
      </div>
      {storage.map((storageItem) => {
        const { id, title, price, description, images } = storageItem;
        return (
          <section key={id} className="storage">
            <div className="storage-basics">
              <img src={images} alt="images" />
              <h5>{title}</h5>
              <div className="storage-deletebtn-price">
                <h4>Price: {price}</h4>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
            </div>
            <p>{description}</p>
          </section>
        );
      })}
    </div>
  );
};

export default Storage;
