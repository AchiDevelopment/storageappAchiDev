import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";

export const GlobalContext = createContext();

let url = "https://fakestoreapi.com/products";

const initialState = {
  storage: [],
  amount: 0,
  totalPrice: 0,
};

export default function GlobalState({ children }) {
  const [isDescOpen, setIsDescOpen] = useState(null);
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddItemToStorage = (id) => {
    dispatch({ type: "ADD_ITEM", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const openDesc = (id) => {
    setIsDescOpen(id);
  };

  const closeDesc = () => {
    setIsDescOpen(null);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <GlobalContext.Provider
      value={{
        setProducts,
        name,
        setName,
        handleDelete,
        handleAddItemToStorage,
        ...state,
        products,
        isDescOpen,
        openDesc,
        closeDesc,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
