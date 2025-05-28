import React, { useReducer } from "react";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa";

const MenuCard = ({ menuData }) => {
  const initialvalue = {
    value: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, value: state.value + 1 };
      case "DECREMENT":
        return state.value > 0 ? { ...state, value: state.value - 1 } : state;
        
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialvalue);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, Description, price } = curElem;

          return (
            <div className="card-container" key={id}>
              <div className="card ">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle"> {category}</span>
                  <h4 className="card-title"> {name} </h4>
                  <span className="card-description subtle">
                    {Description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />
                <span className="price">{price}</span>
                {/* <span className="card-tag subtle"> Order Now </span> */}
                <button className="bg-blue-500 text-3xl py-20 px-10" onClick={() => dispatch({ type: "DECREMENT" })}><FaMinus /> </button>
                <span className="card-tag subtle mr-10"> {state.value > 0 ? `${state.value} ` : "ADD ITEM"}</span>
                <button className="bg-blue-500 text-3xl py-20 px-10 " onClick={() => dispatch({ type: "INCREMENT" })}> <MdAdd />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;