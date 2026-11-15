import ProductCard from "../components/ProductCard";
import products from "../data/product";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export default function Home() {
    const cart = useSelector((state) => state.cart)
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Daftar Produk</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <Link to="/cart" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group">
        <ShoppingCart className="w-6 h-6 transition-transform group-hover:-rotate-12"/>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
          {totalItems}
        </span>
      </Link>
    </div>
  );
}
