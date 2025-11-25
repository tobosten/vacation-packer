import { itemsStore } from "../store/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const packAllItems = itemsStore((state) => state.packAllItems);
  const unpackAllItems = itemsStore((state) => state.unpackAllItems);
  const removePackedItems = itemsStore((state) => state.removePackedItems);

  return (
    <section className="btn-group">
      <Button onClick={packAllItems}>Pack everything</Button>
      <Button onClick={unpackAllItems}>Unpack everything</Button>
      <Button onClick={removePackedItems}>Remove all packed items</Button>
    </section>
  );
}
