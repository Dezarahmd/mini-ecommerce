import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addToCart, decreaseQuantity, removeFromCart } from "../features/cart/cartSlice"    
import { Trash } from "lucide-react"

export default function Cart(){
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const totalPrice = cart.reduce((total, item) => 
        total + (item.price * item.quantity), 0
    )

    function handleAddToCart(item){
        dispatch(addToCart(item))
    }

    function handleDecreaseQuantity(id){
        dispatch(decreaseQuantity(id))
    }

    function handleRemoveFromCart(id){
        dispatch(removeFromCart(id))
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
                <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow-sm">
                    
                    {/* Bagian Kiri: Gambar dan Info Produk */}
                    <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded"/>
                        <div>
                            <h1 className="font-bold text-lg">{item.name}</h1>
                            <p className="text-gray-600">
                                Rp {item.price.toLocaleString('id-ID')} x {item.quantity}
                            </p>
                            <p className="font-semibold text-blue-600">
                                Total: Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                            </p>
                            
                            {/* Tombol Plus Minus */}
                            <div className="flex items-center gap-2 mt-2">
                                <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg text-gray-800 font-bold" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                <span className="font-semibold text-sm px-1">{item.quantity}</span>
                                <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg text-gray-800 font-bold" onClick={() => handleAddToCart(item)}>+</button>
                            </div>
                        </div>  
                    </div>

                    {/* Bagian Kanan: Tombol Hapus (Icon Trash) */}
                    <div>
                        <button 
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            title="Hapus item"
                        >
                            <Trash className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            ))}
            <div className="border-t pt-4 mt-6 flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                <span className="font-bold text-lg text-gray-700">Total Keseluruhan:</span>
                <span className="font-extrabold text-xl text-blue-600">
                    Rp {totalPrice.toLocaleString('id-ID')}
                </span>
            </div>
        </div>
    )
}