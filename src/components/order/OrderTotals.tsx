import { useMemo } from "react";
import { OrderItem } from "../../types";
import index from "../../helpers";

type OrderTotalsProps = {
  order: OrderItem[],
  des: number,
  placeOrder: () => void
};

const OrderTotals = ({ order, des, placeOrder }: OrderTotalsProps) => {
  const subTotal = useMemo(() => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [order]);

  const total = useMemo(() => subTotal * (1 - des), [subTotal, des]);

  return (
    <>
      <div className="space-y-2">
        <div>
          <div className="space-y-4">
            <h3 className="font-black text-2xl">Descripción de lo pedido:</h3>
            <ul className="list-disc pl-5">
              {order.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.quantity} x {item.name}</span>
                  <span>{index(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-2xl ml-56 mt-5">
            Subtotal a pagar: {""}
            <span className="font-bold ml-8">{index(subTotal)}</span>
          </p>
        </div>

        <h2 className="font-black text-2xl">Totales y Descuentos:</h2>

        <p>
          Descuento: {""}
          <span className="font-bold">{index(subTotal * des)}</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold">{index(total)}</span>
        </p>
      </div>
      <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-10 disabled:opacity-10"
      disabled={order.length === 0}
      onClick={placeOrder}
      > Guardar Orden</button>
    </>
  );
};

export default OrderTotals;
