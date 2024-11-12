import index from "../../helpers"
import { MenuItem, OrderItem } from "../../types"

type OrderContentsProps = {
  order: OrderItem[]
  removeItem: (id:MenuItem['id']) => void
}

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="text-3xl font-black">Consumo</h2>
      <div className="space-y-4 mt-5">
        { order.map((item) => (
              <div className="flex justify-between items-center border-t border-gray-300 py-4 last:border-b" key={item.id}>
                <div className="flex-grow flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="font-bold"> - {index(item.price)}</p>
                    </div>
                    <div className="flex-col items-center">
                      <p className="text-gray-600">Cantidad: {item.quantity}</p>
                      <p className="font-bold text-gray-700">Sub.total:  {index(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-bold flex items-center justify-center hover:bg-red-700 transition"
                
                onClick={() => removeItem(item.id)}>
                  X
                </button>
              </div>
            ))}
      </div>
    </div>
  )
}

export default OrderContents
