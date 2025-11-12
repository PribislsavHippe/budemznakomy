import { useState } from "react";
import { X } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productPrice?: number;
}

export function OrderModal({ isOpen, onClose, productName, productPrice }: OrderModalProps) {
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [selectedCafe, setSelectedCafe] = useState<string>("rizhskiy");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    console.log("Order submitted:", { ...formData, deliveryType, selectedCafe, productName, productPrice });
    alert("Спасибо! Мы свяжемся с вами для оформления заказа.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#666666] hover:text-[#1E1E1E] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="display text-[#1E1E1E] mb-2">ОФОРМИТЬ ЗАКАЗ</h2>
          <p className="handwritten text-3xl text-[#FF6B35] -rotate-1 mb-6 inline-block">
            мы свяжемся с вами для уточнения деталей
          </p>

          {productName && (
            <div className="mb-6 p-4 bg-[#FFF5F0] rounded-2xl">
              <p className="font-medium text-[#1E1E1E]">{productName}</p>
              {productPrice && <p className="text-2xl font-bold text-[#FF6B35]">{productPrice} ₽</p>}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Delivery type */}
            <div>
              <label className="block text-sm font-medium text-[#1E1E1E] mb-3">Способ получения</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType("delivery")}
                  className={`flex-1 px-6 py-3 rounded-full transition-all ${
                    deliveryType === "delivery"
                      ? 'bg-[#FF6B35] text-white'
                      : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#FFF5F0]'
                  }`}
                >
                  Доставка
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType("pickup")}
                  className={`flex-1 px-6 py-3 rounded-full transition-all ${
                    deliveryType === "pickup"
                      ? 'bg-[#FF6B35] text-white'
                      : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#FFF5F0]'
                  }`}
                >
                  Самовывоз
                </button>
              </div>
            </div>

            {/* Cafe selection for pickup */}
            {deliveryType === "pickup" && (
              <div>
                <label className="block text-sm font-medium text-[#1E1E1E] mb-3">Выберите кофейню</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-4 border-2 border-[#E0E0E0] rounded-2xl cursor-pointer hover:border-[#FF6B35] transition-colors">
                    <input
                      type="radio"
                      name="cafe"
                      value="rizhskiy"
                      checked={selectedCafe === "rizhskiy"}
                      onChange={(e) => setSelectedCafe(e.target.value)}
                      className="w-5 h-5 text-[#FF6B35]"
                    />
                    <div>
                      <p className="font-medium text-[#1E1E1E]">Рижский проспект, 2</p>
                      <p className="text-sm text-[#666666]">Пн–Пт: 9:00–20:00, Сб–Вс: 10:00–20:00</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-[#E0E0E0] rounded-2xl cursor-pointer hover:border-[#FF6B35] transition-colors">
                    <input
                      type="radio"
                      name="cafe"
                      value="maly"
                      checked={selectedCafe === "maly"}
                      onChange={(e) => setSelectedCafe(e.target.value)}
                      className="w-5 h-5 text-[#FF6B35]"
                    />
                    <div>
                      <p className="font-medium text-[#1E1E1E]">Малый проспект П.С., 60/19</p>
                      <p className="text-sm text-[#666666]">Пн–Пт: 9:00–21:00, Сб–Вс: 10:00–21:00</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Contact info */}
            <div>
              <label className="block text-sm font-medium text-[#1E1E1E] mb-2">Ваше имя *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#E0E0E0] rounded-2xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                placeholder="Иван"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E1E1E] mb-2">Телефон *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#E0E0E0] rounded-2xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                placeholder="+7 900 000 00 00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E1E1E] mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#E0E0E0] rounded-2xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                placeholder="ivan@example.com"
              />
            </div>

            {deliveryType === "delivery" && (
              <div>
                <label className="block text-sm font-medium text-[#1E1E1E] mb-2">Адрес доставки *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#E0E0E0] rounded-2xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                  placeholder="Улица, дом, квартира"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[#1E1E1E] mb-2">Комментарий к заказу</label>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full px-4 py-3 border-2 border-[#E0E0E0] rounded-2xl focus:border-[#FF6B35] focus:outline-none transition-colors resize-none"
                rows={3}
                placeholder="Особые пожелания или вопросы"
              />
            </div>

            <div className="text-xs text-[#666666]">
              Нажимая кнопку "Отправить заказ", вы соглашаетесь с{" "}
              <a href="#" className="text-[#FF6B35] hover:underline">политикой конфиденциальности</a> и даёте согласие на обработку персональных данных.
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF6B35] text-white px-8 py-4 rounded-full hover:bg-[#FF5722] transition-all hover:scale-105 font-bold text-lg uppercase"
            >
              Отправить заказ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
