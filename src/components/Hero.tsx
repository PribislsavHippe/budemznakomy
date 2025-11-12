export function Hero() {
  return (
    <section className="py-8 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Social links as text buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <a 
            href="https://t.me/budemznakomycoffee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FF6B35] text-white px-6 py-3 rounded-full hover:bg-[#FF5722] transition-all hover:scale-105 font-medium"
          >
            Telegram
          </a>
          <a 
            href="https://vk.com/budemznakomycoffee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FF6B35] text-white px-6 py-3 rounded-full hover:bg-[#FF5722] transition-all hover:scale-105 font-medium"
          >
            ВКонтакте
          </a>
          <a 
            href="https://instagram.com/budemznakomycoffee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FF6B35] text-white px-6 py-3 rounded-full hover:bg-[#FF5722] transition-all hover:scale-105 font-medium"
          >
            Instagram
          </a>
        </div>

        {/* Меню кофеен */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a 
            href="#menu-rizhskiy"
            className="border-2 border-[#1E1E1E] text-[#1E1E1E] px-6 py-3 rounded-full hover:bg-[#1E1E1E] hover:text-white transition-all font-medium"
          >
            Меню Рижский пр-т
          </a>
          <a 
            href="#menu-maly"
            className="border-2 border-[#1E1E1E] text-[#1E1E1E] px-6 py-3 rounded-full hover:bg-[#1E1E1E] hover:text-white transition-all font-medium"
          >
            Меню Малый проспект
          </a>
        </div>
      </div>
    </section>
  );
}
