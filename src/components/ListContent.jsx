import { itemsStore } from "../store/itemsStore";

const ListContent = () => {
  const items = itemsStore((state) => state.items);
  const deleteItem = itemsStore((state) => state.deleteItem);
  const toggleItem = itemsStore((state) => state.toggleItem);

  return (
    <ul className="item-list">
      {items.map((item) => {
        return (
          <li className="item" key={item.name}>
            <label>
              <input
                className="item-input"
                type="checkbox"
                checked={item.packed}
                onChange={() => toggleItem(item.id)}
              />
              {item.name}
            </label>
            <button className="item-button" onClick={() => deleteItem(item.id)}>
              ❌
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListContent;
