import Button from "./Button";

export default function ButtonGroup({
  packEverything,
  unpackEverything,
  removeAllPackedItems,
}) {
  return (
    <section className="btn-group">
      <Button onClick={packEverything}>Pack everything</Button>
      <Button onClick={unpackEverything}>Unpack everything</Button>
      <Button onClick={removeAllPackedItems}>Remove all packed items</Button>
    </section>
  );
}
