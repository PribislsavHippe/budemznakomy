import { ProductCard } from "./ProductCard";
import { BeansCard } from "./BeansCard";

interface ProductGridProps {
  onBuyClick: (name: string, price: number) => void;
}

const dripProducts = [
  {
    image: "https://images.unsplash.com/photo-1512372388054-a322888e67a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlwJTIwY29mZmVlJTIwYmFnJTIwcGFja2FnZXxlbnwxfHx8fDE3NjI4NjQ3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Colombia Supremo",
    country: "Колумбия",
    quantity: "10 дрип-пакетов",
    flavors: ["Шоколад", "Карамель", "Орех"],
    price: 890,
  },
  {
    image: "https://images.unsplash.com/photo-1760307256225-59037ef0eb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzYyODY0NzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Ethiopia Yirgacheffe",
    country: "Эфиопия",
    quantity: "10 дрип-пакетов",
    flavors: ["Цитрус", "Ягоды", "Цветы"],
    price: 950,
  },
  {
    image: "https://images.unsplash.com/photo-1746422029443-7bb5746f6209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzcGVjaWFsdHklMjBwYWNrYWdlfGVufDF8fHx8MTc2Mjg2NDc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Brazil Santos",
    country: "Бразилия",
    quantity: "10 дрип-пакетов",
    flavors: ["Шоколад", "Орех", "Ваниль"],
    price: 790,
  },
];

const beansProducts = [
  {
    image: "https://images.unsplash.com/photo-1663911278520-0fa05ff61eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzYyODMyNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Kenya AA",
    processing: "Мытая обработка",
    weight: "250 г",
    flavors: ["Смородина", "Грейпфрут", "Вино"],
    price: 650,
  },
  {
    image: "https://images.unsplash.com/photo-1663911278520-0fa05ff61eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzYyODMyNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Guatemala Antigua",
    processing: "Натуральная обработка",
    weight: "250 г",
    flavors: ["Какао", "Специи", "Карамель"],
    price: 580,
  },
  {
    image: "https://images.unsplash.com/photo-1663911278520-0fa05ff61eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzYyODMyNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Costa Rica Tarrazu",
    processing: "Анаэробная обработка",
    weight: "250 г",
    flavors: ["Мёд", "Яблоко", "Миндаль"],
    price: 620,
  },
];

export function ProductGrid({ onBuyClick }: ProductGridProps) {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Drip section */}
        <div className="mb-12">
          <div className="mb-8 text-center">
            <h2 className="display text-[#1E1E1E] mb-2">
              ДРИП-ПАКЕТЫ
            </h2>
            <p className="handwritten text-4xl text-[#FF6B35] -rotate-2 inline-block">
              удобно заваривать где угодно
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dripProducts.map((product, index) => (
              <ProductCard key={index} {...product} onBuyClick={onBuyClick} />
            ))}
          </div>
        </div>

        {/* Beans section */}
        <div>
          <div className="mb-8 text-center">
            <h2 className="display text-[#1E1E1E] mb-2">
              ЗЕРНОВОЙ КОФЕ
            </h2>
            <p className="handwritten text-4xl text-[#FF6B35] -rotate-2 inline-block">
              выберите помол под ваш способ приготовления
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beansProducts.map((product, index) => (
              <BeansCard key={index} {...product} onBuyClick={onBuyClick} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
