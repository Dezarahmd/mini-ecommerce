import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { store } from "../app/store"

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart(){
    dispatch(addToCart(product))

    console.log("State setelah dispatch:", store.getState())
}

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </span>
      </div>
      <div className="p-4 flex flex-col grow justify-between">
        <div>
          <h3 className="font-bold text-gray-800 text-lg line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-blue-600 font-extrabold text-lg">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
        </div>
        <button
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-2 shadow-sm"
          onClick={handleAddToCart}
        >
          <span>+ Tambah ke keranjang</span>
        </button>
      </div>
    </div>
  );
}
