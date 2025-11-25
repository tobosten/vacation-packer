import "../index.css";
import BackgroundHeader from "./BackgroundHeader.jsx";
import Header from "./Header.jsx";
import ListContent from "./ListContent.jsx";
import Sidebar from "./Sidebar.jsx";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { itemsStore } from "../store/itemsStore.js";

function App() {
  const items = itemsStore((state) => state.items);
  const restoreInitialList = itemsStore((state) => state.restoreInitialList);

  return (
    <>
      <BackgroundHeader />
      <main>
        <Header listItems={items} />
        <div className="content">
          {items.length ? (
            <ListContent />
          ) : (
            <div className="item-list-empty">
              <span
                onClick={() => {
                  restoreInitialList();
                }}
              >
                No items in list... <BookmarkIcon className="bookmark-icon" />
              </span>
            </div>
          )}

          <Sidebar />
        </div>
      </main>
    </>
  );
}

export default App;
