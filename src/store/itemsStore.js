import { persist } from "zustand/middleware"
import { initialListItems } from "../constants"
import { create } from "zustand"


export const itemsStore = create(persist((set) => ({
  items: initialListItems,
  addItem: ({ itemInput, setItemInput }) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemInput,
      packed: false,
    };

    if (itemInput.length) {
      set(state => ({ items: [...state.items, newItem] }));
      setItemInput("");
    }
    console.log(itemInput);
  },
  deleteItem: (id) => {
    set(state => {
      const newItems = state.items.filter(items => items.id !== id);
      return { items: newItems }
    })
  },
  toggleItem: (id) => {
    set(state => {
      const newItems = state.items.map(item => {
        if (item.id === id) {
          return { ...item, packed: !item.packed }
        } else {
          return item;
        }
      })
      return { items: newItems }
    })
  },
  restoreInitialList: () => {
    set(() => ({ items: initialListItems }))
  },
  packAllItems: () => {
    set(state => {
      const newItems = state.items.map(item => ({ ...item, packed: true }));
      return { items: newItems }
    })
  },
  unpackAllItems: () => {
    set(state => {
      const newItems = state.items.map(item => ({ ...item, packed: false }));
      return { items: newItems }
    })
  },
  removePackedItems: () => {
    set(state => {
      const newItems = state.items.filter(item => !item.packed);
      return { items: newItems }
    })
  }
}), {
  name: "items"
})
);