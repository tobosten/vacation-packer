export default function Header({ listItems }) {
  let packedItems = 0;
  listItems.map((item) => {
    if (item.packed) {
      packedItems++;
    }
  });

  return (
    <header>
      <span className={`${listItems.length < 1 && "all-items-packed"}`}>
        V.P
      </span>
      <p>
        <b>{packedItems}</b> /{" "}
        <span className={`${listItems.length < 1 && "all-items-packed"}`}>
          {listItems.length}
        </span>{" "}
        packed
      </p>
    </header>
  );
}
