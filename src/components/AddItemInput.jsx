import { useRef, useState } from "react";
import Button from "./Button";
import { itemsStore } from "../store/itemsStore";

export default function AddItemInput() {
  const addItem = itemsStore((state) => state.addItem);
  const [itemInput, setItemInput] = useState("");
  const inputRef = useRef();

  const handleInputChange = (event) => {
    event.preventDefault();
    addItem({ itemInput, setItemInput });
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleInputChange} className="add-item-form">
      <input
        className="sidebar-input"
        type="text"
        placeholder="Important item..."
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
        ref={inputRef}
      />
      <Button>Add item</Button>
    </form>
  );
}
