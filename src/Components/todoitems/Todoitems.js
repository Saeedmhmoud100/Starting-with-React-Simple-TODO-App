import React from "react";
import "./Todoitems.css";

const TodoItems = props => {
  return (
    <div className="items">
      {props.items.map((item, index) => {
        return (
          <div className={`item`} id={`item-${item.id}`} key={item.id}>
            <div>
              {item.id}
            </div>
            <div>
              {item.task}
            </div>
            <div>
              <span style={{ cursor: "pointer" }}> &#935;</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoItems;