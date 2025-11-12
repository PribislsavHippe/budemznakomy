import { ShoppingCart, Coffee, MapPin, Phone, Clock } from "lucide-react";

interface NavigationProps {
  onOrderClick: () => void;
}

export function Navigation({ onOrderClick }: NavigationProps) {
  return (
    <nav className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main grid: Contact info left, Buy button right */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Left: Contact info */}
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Location 1 */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-[#1E1E1E]">Рижский пр-т, 2</p>
                  <p className="text-xs text-[#666666] flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    Пн–Пт: 9–20, Сб–Вс: 10–20
                  </p>
                </div>
              </div>

              {/* Location 2 */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-[#1E1E1E]">Малый пр-т П.С., 60/19</p>
                  <p className="text-xs text-[#666666] flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    Пн–Пт: 9–21, Сб–Вс: 10–21
                  </p>
                </div>
              </div>
            </div>

            <a href="tel:+79817175842" className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#FF6B35] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+7 981 717 58 42</span>
            </a>
          </div>

          {/* Right: Buy button */}
          <div className="flex justify-end">
            <button 
              onClick={onOrderClick}
              className="bg-[#FF6B35] text-white px-12 py-4 rounded-full hover:bg-[#FF5722] transition-all hover:scale-105 font-bold text-lg uppercase tracking-wide"
            >
              Купить зерна
            </button>
          </div>
        </div>

        {/* Logo - центрируем */}
        <div className="text-center mb-6">
          <h1 className="display text-[#1E1E1E] mb-2">
            БУДЕМ ЗНАКОМЫ
          </h1>
          <p className="handwritten text-5xl text-[#FF6B35] -rotate-2 inline-block">
            Семейная кофейня в Петербурге
          </p>
        </div>

        {/* Cart */}
        <div className="flex justify-end">
          <button className="relative group">
            <ShoppingCart className="w-6 h-6 text-[#1E1E1E] group-hover:text-[#FF6B35] transition-colors" />
            <span className="absolute -top-2 -right-2 bg-[#FF6B35] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
