const ListContent = ({ listItems, setListItems }) => {
  const deleteItem = (id) => {
    // maps throguh listItems and toggles packed state
    const newItems = listItems.map((mapItem) => {
      if (mapItem.id === id) {
        return { ...mapItem, packed: !mapItem.packed };
      } else {
        return mapItem;
      }
    });
    setListItems(newItems);
  };

  return (
    <ul className="item-list">
      {listItems.map((item) => {
        return (
          <li className="item" key={item.name}>
            <label>
              <input
                className="item-input"
                type="checkbox"
                checked={item.packed}
                onChange={() => {
                  deleteItem(item.id);
                }}
              />
              {item.name}
            </label>
            <button
              className="item-button"
              onClick={() => {
                const newItems = listItems.filter(
                  (filterItem) => item.id != filterItem.id
                );
                setListItems(newItems);
              }}
            >
              ❌
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListContent;
