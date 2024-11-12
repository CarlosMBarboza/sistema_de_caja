import type { MenuItem } from "../../types/index";

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <>
      <button className="border-2 border-teal-600 hover:bg-teal-400 w-full flex justify-between p-2 rounded-lg"
      onClick={ () => addItem(item) }
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
};

export default MenuItem;
