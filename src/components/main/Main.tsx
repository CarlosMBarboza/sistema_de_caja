import { menuItems } from "../../data/db";
import useOrder from "../../hooks/useOrder";
import TipDescuentosForm from "../descuentos/TipDescuentosForm";
import MenuItem from "../menuItem/MenuItem";
import OrderTotals from "../order/OrderTotals";
import OrederContents from "../order/OrederContents";

const Main = () => {
  const { order, addItem, removeItem, des, setDes, placeOrder } = useOrder();
  return (
    <>
      <main className="max-w-6xl mx-auto py-2 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-black">Menú</h2>
          <div className="space-y-2 mt-5">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrederContents order={order} removeItem={removeItem} />
              <TipDescuentosForm setDes={setDes} des={des} />
              <OrderTotals order={order} des={des} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center text-2xl font-black">
              La orden está vacía
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
