"use client";

import { useEffect, useState, useRef } from "react";
import type { Hotsnack } from "@/db/schema";
import PictureFrame from "@/components/PictureFrame";
import MedalFrame from "@/components/MedalFrame";
import HotsnackDetailModal from "@/components/HotsnackDetailModal";

export default function CategoriesPage() {
  const [hotsnacks, setHotsnacks] = useState<Hotsnack[]>([]);
  const [genreList, setGenreList] = useState<string[]>([]);
  const [modalHotsnack, setModalHotsnack] = useState<Hotsnack | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchHotsnacks = async () => {
      try {
        const res = await fetch("/api/v1/hotsnacks");
        if (!res.ok) return;
        const data: Hotsnack[] = await res.json();
        const genres = [...new Set(data.map((h) => h.genre).filter(Boolean))] as string[];
        setGenreList(genres);
        setHotsnacks(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHotsnacks();
  }, []);

  const getByGenre = (genre: string) =>
    hotsnacks.filter((h) => h.genre === genre);

  const openModal = (hotsnack: Hotsnack) => {
    setModalHotsnack(hotsnack);
    setModalVisible(true);
  };

  return (
    <div className="pb-24 px-2">
      {genreList.map((genre) => (
        <div key={genre} className="my-4">
          <h2
            className="text-center text-xl my-2"
            style={{ fontFamily: '"Hiragino Mincho Pro", serif' }}
          >
            〜{genre}展〜
          </h2>
          <Carousel items={getByGenre(genre)} onItemClick={openModal} />
        </div>
      ))}

      <HotsnackDetailModal
        isVisible={modalVisible}
        hotsnack={modalHotsnack}
        onClose={() => {
          setModalVisible(false);
          setModalHotsnack(null);
        }}
      />
    </div>
  );
}

function Carousel({
  items,
  onItemClick,
}: {
  items: Hotsnack[];
  onItemClick: (h: Hotsnack) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  if (items.length === 0) return null;
  const hotsnack = items[currentIndex];
  const rank = currentIndex;

  const plateClass =
    rank === 0 ? "plate-gold" : rank === 1 ? "plate-silver" : rank === 2 ? "plate-copper" : "";

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation arrows */}
      <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-1">
        <button
          onClick={goPrev}
          className={`p-2 bg-white/80 rounded-full shadow ${currentIndex === 0 ? "invisible" : ""}`}
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className={`p-2 bg-white/80 rounded-full shadow ${currentIndex === items.length - 1 ? "invisible" : ""}`}
        >
          ▶
        </button>
      </div>

      <div
        className="pt-2 bg-[#f6f5ee] cursor-pointer"
        onClick={() => onItemClick(hotsnack)}
      >
        {/* Medal label */}
        <MedalFrame rank={rank}>
          {currentIndex + 1}番人気の美術品
        </MedalFrame>

        {/* Picture */}
        <div className="mx-8 mt-6">
          <PictureFrame>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hotsnack.image}
              alt={hotsnack.name}
              className="w-full h-auto"
            />
          </PictureFrame>

          {/* Name plate */}
          <div className={`mx-2 mt-10 shadow-lg ${plateClass}`}>
            <div className="text-center text-xs font-bold pt-2 pb-0 whitespace-pre-line text-[#2c281e]">
              {hotsnack.name}
            </div>
            <hr className="hr-plate" />
            <div className="text-center text-xs font-bold pt-2 pb-2 font-[family-name:var(--font-lusitana)] text-[#2c281e]">
              {hotsnack.store}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination indicator */}
      <div className="text-center text-xs text-gray-500 mt-2">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}
