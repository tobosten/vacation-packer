import ButtonGroup from "./ButtonGroup";
import AddItemInput from "./AddItemInput";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemInput />
      <ButtonGroup />
    </div>
  );
}
