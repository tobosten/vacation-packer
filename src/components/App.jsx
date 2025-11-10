import { useEffect, useState } from "react";
import "../index.css";
import BackgroundHeader from "./BackgroundHeader.jsx";
import Header from "./Header.jsx";
import ListContent from "./ListContent.jsx";
import Sidebar from "./Sidebar.jsx";
import { initialListItems } from "../constants.js";
import { BookmarkIcon } from "@radix-ui/react-icons";

function App() {
  const [listItems, setListItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialListItems
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(listItems));
  }, [listItems]);

  return (
    <>
      <BackgroundHeader />
      <main>
        <Header listItems={listItems} />
        <div className="content">
          {listItems.length ? (
            <ListContent listItems={listItems} setListItems={setListItems} />
          ) : (
            <div className="item-list-empty">
              <span
                onClick={() => {
                  setListItems(initialListItems);
                }}
              >
                No items in list... <BookmarkIcon className="bookmark-icon" />
              </span>
            </div>
          )}

          <Sidebar listItems={listItems} setListItems={setListItems} />
        </div>
      </main>
    </>
  );
}

export default App;
