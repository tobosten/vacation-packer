export default function Header({ listItems }) {
  let packedItems = 0;
  listItems.filter((item) => {
    if (item.packed === true) {
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
