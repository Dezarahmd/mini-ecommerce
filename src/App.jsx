import Cart from "./components/Cart"
import ProductCard from "./components/ProductCard"
import products from "./data/product"
import { useSelector } from "react-redux"
import { ShoppingCart } from "lucide-react"

function App() {
  const cart = useSelector((state) => state.cart)

  // Perbaikan: Hitung total semua quantity item, bukan cuma panjang array-nya
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      
      {/* Header / Navbar Sederhana */}
      <header className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-extrabold text-gray-800">KafeKita Store</h1>
        
        {/* Ikon Keranjang dengan Badge Total Quantity */}
        <div className="relative cursor-pointer p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <ShoppingCart className="w-6 h-6 text-gray-700" /> 
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-pulse">
              {totalItems}
            </span>
          )}
        </div>
      </header>

      {/* Bagian Daftar Produk */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-gray-800">Daftar Produk</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item}/>
          ))}
        </div>
      </section>

      {/* Bagian Keranjang Belanja */}
      <section className="border-t pt-6">
        <Cart/>
      </section>

    </div>
  )
}

export default App