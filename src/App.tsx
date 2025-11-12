import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { Footer } from "./components/Footer";
import { OrderModal } from "./components/OrderModal";

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] =
    useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    price: number;
  } | null>(null);

  const handleBuyClick = (name: string, price: number) => {
    setSelectedProduct({ name, price });
    setIsOrderModalOpen(true);
  };

  const handleOrderClick = () => {
    setSelectedProduct(null);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onOrderClick={handleOrderClick} />
      <Hero />
      <ProductGrid onBuyClick={handleBuyClick} />
      <Footer />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        productName={selectedProduct?.name}
        productPrice={selectedProduct?.price}
      />
    </div>
  );
}