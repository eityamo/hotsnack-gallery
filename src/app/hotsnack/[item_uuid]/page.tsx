"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Hotsnack } from "@/db/schema";
import PictureFrame from "@/components/PictureFrame";
import AnimatedNumber from "@/components/AnimatedNumber";
import MoneyDescriptionModal from "@/components/MoneyDescriptionModal";

function getStoreYear(store: string): string {
  if (store === "セブン-イレブン") return "1974年 - 現在";
  if (store === "LAWSON") return "1975年 - 現在";
  if (store === "FamilyMart") return "1973年 - 現在";
  return "";
}

export default function HotsnackDetailPage() {
  const params = useParams<{ item_uuid: string }>();
  const [hotsnack, setHotsnack] = useState<Hotsnack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);
  const [speechDisabled, setSpeechDisabled] = useState(false);
  const [moneyModal, setMoneyModal] = useState(false);
  const [likeDisabled, setLikeDisabled] = useState(false);
  const [dislikeDisabled, setDislikeDisabled] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/v1/hotsnack/${params.item_uuid}`);
        if (res.ok) {
          const data: Hotsnack = await res.json();
          setHotsnack(data);
        } else {
          setHotsnack(null);
        }
      } catch {
        setHotsnack(null);
      }
      setIsLoading(false);
    };
    fetchDetail();
  }, [params.item_uuid]);

  const addLike = async () => {
    if (!hotsnack || likeDisabled) return;
    setLikeDisabled(true);
    setTimeout(() => setLikeDisabled(false), 2000);
    const res = await fetch(`/api/v1/hotsnack/${params.item_uuid}/like`, {
      method: "PUT",
    });
    if (res.ok) {
      setHotsnack((prev) =>
        prev ? { ...prev, like_count: prev.like_count + 1 } : prev
      );
    }
  };

  const addDislike = async () => {
    if (!hotsnack || dislikeDisabled) return;
    setDislikeDisabled(true);
    setTimeout(() => setDislikeDisabled(false), 2000);
    const res = await fetch(`/api/v1/hotsnack/${params.item_uuid}/dislike`, {
      method: "PUT",
    });
    if (res.ok) {
      setHotsnack((prev) =>
        prev ? { ...prev, dislike_count: prev.dislike_count + 1 } : prev
      );
    }
  };

  const speak = () => {
    if (!hotsnack) return;
    setSpeechDisabled(true);
    const utterance = new SpeechSynthesisUtterance(hotsnack.description);
    speechSynthesis.speak(utterance);
    setTimeout(() => setSpeechDisabled(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="gallery-page">
        <div className="gallery-panel flex justify-center items-center h-64">
          <div className="animate-pulse text-[#c8a870]">Loading...</div>
        </div>
      </div>
    );
  }

  if (!hotsnack) {
    return (
      <div className="gallery-page">
        <div className="gallery-panel text-center py-8">
          <p className="text-sm text-[#a08060]">美術品は見つかりませんでした</p>
        </div>
      </div>
    );
  }

  const evaluationAmount = hotsnack.price * hotsnack.like_count;

  return (
    <div className="gallery-page">

      {/* Evaluation & Like/Dislike */}
      <div className="gallery-panel px-4 pt-6 pb-4">
        <div className="grid grid-cols-3 gap-1 mb-1">
          <div className="text-center">
            <button
              onClick={() => setMoneyModal(true)}
              className="text-base font-bold relative cursor-pointer"
            >
              評価額
              <span className="absolute -top-1 -right-4 bg-black text-white rounded-full w-4 h-4 text-[0.5em] flex items-center justify-center">
                ?
              </span>
            </button>
          </div>
          <div className="text-center">
            <button onClick={addLike} disabled={likeDisabled} className="p-1 text-lg disabled:opacity-50 cursor-pointer">
              👍
            </button>
          </div>
          <div className="text-center">
            <button onClick={addDislike} disabled={dislikeDisabled} className="p-1 text-lg disabled:opacity-50 cursor-pointer">
              👎
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <div className="text-center text-sm">
            <AnimatedNumber value={evaluationAmount} /> 円
          </div>
          <div className="text-center text-sm">{hotsnack.like_count}</div>
          <div className="text-center text-sm">{hotsnack.dislike_count}</div>
        </div>
      </div>

      <div className="gallery-gap" />

      {/* Artwork — picture frame displayed in the gallery room */}
      <div className="gallery-panel py-8 px-10">
        <PictureFrame>
          <img
            src={hotsnack.image}
            alt={hotsnack.name}
            className="w-full h-auto"
          />
        </PictureFrame>

        {/* Name Plate */}
        <div className="mx-4 mt-10 shadow-lg">
          <div className="text-center text-xs font-bold pt-2 pb-0 whitespace-pre-line text-[#2c281e]">
            {hotsnack.name}
          </div>
          <div className="text-center text-[0.55em] font-light pt-1 pb-2 text-[#2c281e]">
            {hotsnack.price}円（税込）
          </div>
          <hr className="hr-plate" />
          <div className="text-center text-xs font-bold pt-2 pb-0 font-[family-name:var(--font-lusitana)] text-[#2c281e]">
            {hotsnack.store}
          </div>
          <div className="text-center text-[0.55em] font-light pt-1 pb-0 text-[#2c281e]">
            {getStoreYear(hotsnack.store)}
          </div>
          <div className="text-center text-[0.55em] font-light pt-0 pb-2 text-[#2c281e]">
            {hotsnack.genre} / {hotsnack.ingredient}
          </div>
        </div>
      </div>

      <div className="gallery-gap" />

      {/* Description */}
      <div className="gallery-panel px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <span className="text-sm">作品解説</span>
            <button
              onClick={speak}
              disabled={speechDisabled}
              className="p-1 disabled:opacity-50 cursor-pointer"
            >
              🔊
            </button>
          </div>
          <button onClick={() => setShow(!show)} className="p-1 text-lg cursor-pointer">
            {show ? "▲" : "▼"}
          </button>
        </div>
        {show && (
          <p className="text-sm text-[#c8b08a] pt-2 leading-6">
            {hotsnack.description}
          </p>
        )}
      </div>

      <MoneyDescriptionModal
        isVisible={moneyModal}
        onClose={() => setMoneyModal(false)}
      />
    </div>
  );
}
