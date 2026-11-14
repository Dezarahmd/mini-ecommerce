import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addToCart, decreaseQuantity } from "../features/cart/cartSlice"

export default function Cart(){
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    function handleAddToCart(item){
        dispatch(addToCart(item))
    }

    function handleDecreaseQuantity(id){
        dispatch(decreaseQuantity(id))
    }

    if (cart.length === 0) {
        return (
            <div className="p-6 text-center text-gray-500">
                <p>Wah, Keranjang belanjaanmu masih kosong nih!</p>
            </div>
        )
    }

    return (
        <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold mb-4">Keranjang Belanja</h2>
            {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg shadow-sm">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded"/>
                    <div>
                        <h1 className="font-bold text-lg">{item.name}</h1>
                        <p className="text-gray-600">
                            Rp {item.price.toLocaleString('id-ID')} x {item.quantity}
                        </p>
                        <p className="font-semibold text-blue-600">
                            Total: Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                        </p>
                        <div className="gap-3 flex mt-2">
                            <button className="bg-blue-500 py-0.2 px-2 rounded-lg text-white" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                            <button className="bg-blue-500 py-0.2 px-2 rounded-lg text-white" onClick={() => handleAddToCart(item)}>+</button>
                        </div>
                    </div>  
                </div>
            ))}
        </div>
    )
}