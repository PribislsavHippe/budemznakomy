import { Coffee } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="w-6 h-6 text-[#FF6B35]" />
            <span className="display text-xl text-[#1E1E1E]">БУДЕМ ЗНАКОМЫ</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <button 
              onClick={() => setShowTerms(true)}
              className="text-[#666666] hover:text-[#FF6B35] transition-colors"
            >
              Пользовательское соглашение
            </button>
            <span className="text-[#E0E0E0]">•</span>
            <button 
              onClick={() => setShowPrivacy(true)}
              className="text-[#666666] hover:text-[#FF6B35] transition-colors"
            >
              Политика конфиденциальности
            </button>
          </div>

          <div className="text-sm text-[#666666] space-y-1">
            <p>ИП Иванов Иван Иванович</p>
            <p>ИНН: 123456789012 • ОГРНИП: 123456789012345</p>
            <p className="text-xs mt-2">© 2025</p>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6" onClick={() => setShowTerms(false)}>
          <div className="bg-white max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="display text-3xl text-[#1E1E1E] mb-6">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</h3>
            <div className="space-y-4 text-[#333333] text-sm">
              <p>Настоящее Пользовательское соглашение регулирует отношения между владельцем сайта «Будем Знакомы» и пользователем сайта.</p>
              <h4 className="font-semibold mt-4">1. Общие положения</h4>
              <p>1.1. Использование сайта означает согласие с настоящим Соглашением.</p>
              <p>1.2. Администрация оставляет за собой право изменять Соглашение без уведомления пользователя.</p>
              <h4 className="font-semibold mt-4">2. Обязанности пользователя</h4>
              <p>2.1. Пользователь обязуется предоставлять достоверную информацию при оформлении заказа.</p>
              <p>2.2. Пользователь не имеет права использовать сайт в незаконных целях.</p>
              <h4 className="font-semibold mt-4">3. Ответственность</h4>
              <p>3.1. Администрация не несет ответственности за убытки, возникшие в результате использования сайта.</p>
            </div>
            <button 
              onClick={() => setShowTerms(false)}
              className="mt-6 bg-[#FF6B35] text-white px-6 py-3 rounded-full hover:bg-[#FF5722] transition-colors font-medium"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6" onClick={() => setShowPrivacy(false)}>
          <div className="bg-white max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="display text-3xl text-[#1E1E1E] mb-6">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h3>
            <div className="space-y-4 text-[#333333] text-sm">
              <p>Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сайта «Будем Знакомы».</p>
              <h4 className="font-semibold mt-4">1. Собираемая информация</h4>
              <p>1.1. При оформлении заказа мы собираем: ФИО, адрес доставки, телефон, email.</p>
              <h4 className="font-semibold mt-4">2. Цели обработки данных</h4>
              <p>2.1. Персональные данные используются для обработки заказов, связи с клиентами и улучшения сервиса.</p>
              <h4 className="font-semibold mt-4">3. Защита данных</h4>
              <p>3.1. Мы применяем меры для защиты данных от несанкционированного доступа.</p>
              <p>3.2. Данные не передаются третьим лицам без согласия, кроме случаев, предусмотренных законом.</p>
              <h4 className="font-semibold mt-4">4. Согласие на обработку данных</h4>
              <p>4.1. Используя сайт и оформляя заказ, вы даете согласие на обработку персональных данных.</p>
            </div>
            <button 
              onClick={() => setShowPrivacy(false)}
              className="mt-6 bg-[#FF6B35] text-white px-6 py-3 rounded-full hover:bg-[#FF5722] transition-colors font-medium"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
}
