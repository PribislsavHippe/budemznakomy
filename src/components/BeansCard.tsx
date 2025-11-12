import { ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HandDrawnCard } from "./HandDrawnCard";
import { useState } from "react";

interface BeansCardProps {
  image: string;
  name: string;
  processing: string;
  weight: string;
  flavors: string[];
  price: number;
  onBuyClick: (name: string, price: number, grindType: string) => void;
}

export function BeansCard({ image, name, processing, weight, flavors, price, onBuyClick }: BeansCardProps) {
  const [grindType, setGrindType] = useState<string>("whole");

  const grindOptions = [
    { value: "whole", label: "Зерно" },
    { value: "espresso", label: "Эспрессо" },
    { value: "filter", label: "Фильтр" },
    { value: "french-press", label: "Френч-пресс" },
    { value: "turkish", label: "Турка" },
  ];

  return (
    <HandDrawnCard className="group hover:scale-[1.02] transition-transform duration-300">
      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-2xl mb-4">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <h4 className="display text-[#1E1E1E] mb-1 leading-tight">
        {name}
      </h4>
      
      <p className="handwritten text-3xl text-[#FF6B35] -rotate-2 mb-2">
        {processing}
      </p>

      <p className="text-sm text-[#666666] mb-3">{weight}</p>

      {/* Flavor notes */}
      <div className="mb-4">
        <p className="text-xs text-[#999999] mb-2">Вкус:</p>
        <div className="flex flex-wrap gap-2">
          {flavors.map((flavor, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 bg-[#FFF5F0] text-[#FF6B35] rounded-full"
            >
              {flavor}
            </span>
          ))}
        </div>
      </div>

      {/* Grind selection */}
      <div className="mb-4">
        <p className="text-xs text-[#999999] mb-2">Помол:</p>
        <div className="flex flex-wrap gap-2">
          {grindOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setGrindType(option.value)}
              className={`text-sm px-3 py-1.5 rounded-full transition-all ${
                grindType === option.value
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#FFF5F0]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price and button */}
      <div className="flex items-center justify-between pt-4">
        <span className="font-black text-3xl text-[#1E1E1E]">
          {price.toLocaleString('ru-RU')} ₽
        </span>
        <button 
          onClick={() => onBuyClick(`${name} (${grindOptions.find(o => o.value === grindType)?.label})`, price, grindType)}
          className="bg-[#FF6B35] text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#FF5722] transition-all font-medium text-sm hover:scale-105 active:scale-95"
        >
          <ShoppingCart className="w-4 h-4" />
          Купить
        </button>
      </div>
    </HandDrawnCard>
  );
}
