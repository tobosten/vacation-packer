import ButtonGroup from "./ButtonGroup";
import AddItemInput from "./AddItemInput";

export default function Sidebar({ listItems, setListItems }) {
  const onAddItem = ({ itemInput, setItemInput }) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemInput,
      packed: false,
    };

    if (itemInput.length) {
      setListItems([...listItems, newItem]);
      setItemInput("");
    }
    console.log(itemInput);
  };

  const packEverything = () => {
    setListItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: true }))
    );
  };
  const unpackEverything = () => {
    setListItems((prevItems) => {
      return prevItems.map((item) => ({ ...item, packed: false }));
    });
  };
  const removeAllPackedItems = () => {
    setListItems([]);
  };

  return (
    <div className="sidebar">
      <AddItemInput onAddItem={onAddItem} />

      <ButtonGroup
        packEverything={packEverything}
        unpackEverything={unpackEverything}
        removeAllPackedItems={removeAllPackedItems}
      />
    </div>
  );
}
